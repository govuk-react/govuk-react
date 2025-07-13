import * as React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import { GridCol, GridRow, H3, SectionBreak } from 'govuk-react';
import {BLACK, FOCUS_COLOUR, GREY_3, BLUE, WHITE, } from 'govuk-colours';
interface AccordionProps extends React.HTMLAttributes<HTMLDetailsElement> {
  items?: Array<{}>;
  visibleToggleAll: boolean;
}

function svgChevron(chevronColour) {
  const chevron = encodeURIComponent(`
        <svg xmlns='http://www.w3.org/2000/svg' width="12.5" height="12.5" viewBox="0 0 10 10" fill="none" stroke='`+chevronColour+`' stroke-width="2">
          <polyline points="2,3 5,6 8,3" />
        </svg>
        `)
  return (
    chevron
  )
}

const SectionChevron = styled('svg')(
  {
    content: '""',
    display: 'inline-block',
    position: 'absolute',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'transform 0.3s ease',
    outline: '1px solid #1d70b8',
})

export const Accordion: React.FC<AccordionProps> = ({ items, visibleToggleAll }) => {
    const [sectionsOpenList, setSections] = useState<boolean[]>(items.map((item: any) => item.expanded));
    const [sectionHoverList, setHoverSection] = useState<boolean[]>(items.map((item: any) => false));
    const [sectionFocusList, setFocusSection] = useState<boolean[]>(items.map((item: any) => false));

    const [allButtonFocused, setAllButtonFocus] = useState(false);
    const [allButtonHover, setAllButtonHover] = useState(false);
    const [areAllSectionsOpen, setAreAllSectionsOpen] = useState(sectionsOpenList.every(open => open === true));

    const toggleSection = (index: number, e: React.MouseEvent) => {
        e.preventDefault(); 
        if (index === -1){
            setSections((prev) => prev.map((val, i) => 
                (i === index ? 
                    sectionsOpenList.every(open => open === true) : 
                    !sectionsOpenList.every(open => open === true))))    
            }
        else {
            setSections((prev) =>
                prev.map((val, i) => (i === index ? !val : val)))
        }
    };

    React.useEffect(() => {
        setAreAllSectionsOpen(sectionsOpenList.every(open => open === true))
    }, [sectionsOpenList]);

    const toggleHover = (index: number, e: React.MouseEvent) => {
        e.preventDefault();
        setHoverSection((prev) =>
          prev.map((val, i) => (i === index ? !val : val))
        );

        if(index === -1){
            setAllButtonHover(!allButtonHover)
        }
    };

    const toggleFocus = (index: number, e: React.FocusEvent, isFocused) => {
        setFocusSection(sectionFocusList.map(item =>{return(false)})) //Reset the focus list to clear the FOCUS Colour on the currently focused section header
        e.preventDefault();
        if(isFocused){
            setFocusSection((prev) =>
                prev.map((val, i) => (i === index ? !val : val))
            );
        }
        if(index === -1){
            setAllButtonFocus(!allButtonFocused)
        }
    };
    return (
        <>
            {/* SHOW/HIDE all header */}
            {visibleToggleAll ?
            <>
                <div
                    onClick={(e) => toggleSection(-1, e)}
                    onMouseEnter={(e) => {toggleHover(-1, e)} } 
                    onMouseLeave={(e) => {toggleHover(-1, e)}}
                    tabIndex={-1}
                    onFocus={(e) => {toggleFocus(-1, e, true)}}
                    onBlur={(e) => {toggleFocus(-1, e, false)}}
                    style={{
                        cursor:'pointer',
                        display:'block',
                        paddingBottom: '0.5rem',
                        paddingTop: '0.5rem'
                    }}
                >
                <GridRow>
                    <GridCol>
                        <div 
                            style={{
                                backgroundColor: allButtonFocused ? FOCUS_COLOUR : allButtonHover ? GREY_3 : 'white',
                                borderBottom: allButtonFocused ? '4px solid'+BLACK : '4px solid transparent',
                                display:'inline-block',
                                paddingTop: '0.5rem',
                        }}>
                        <SectionChevron 
                            style={{
                                backgroundColor: 
                                    allButtonFocused ?  BLACK : allButtonHover? BLACK: WHITE, 
                                backgroundImage: 
                                    allButtonFocused ? 
                                        `url("data:image/svg+xml,${svgChevron(FOCUS_COLOUR)}")` 
                                    : 
                                    allButtonHover? 
                                        `url("data:image/svg+xml,${svgChevron(WHITE)}")`
                                        :
                                        `url("data:image/svg+xml,${svgChevron(BLUE)}")`,
                                color: allButtonHover ?  '#fff' : BLUE, 
                                display:'inline-block',
                                transform: areAllSectionsOpen ? 'rotate(180deg)' :'rotate(0deg)',
                            }} 
                            />
                                <div style={{
                                    color : !allButtonHover && !allButtonFocused ? BLUE: BLACK,
                                    display: 'inline-block',
                                    fontFamily: 'Arial',
                                    fontSize: '1.1875rem',
                                    paddingLeft: '1.5rem',
                                    paddingBottom: '0.5rem',
                                }} 
                                >            
                                    {areAllSectionsOpen ? 'Hide all sections' : 'Show all sections'}
                                </div>
                            </div>
                        </GridCol>
                    </GridRow>
                </div>

                <SectionBreak visible={true} />
            </>
            : null}
            {/* Generate each section */}
            {items.map((section: any, index: number) => (        
                <div key={section.id} 
                >
                {/* Section header */}
                    <div
                        onClick={(e) => toggleSection(index, e)}
                        onMouseEnter={(e) => {toggleHover(index, e)} } 
                        onMouseLeave={(e) => {toggleHover(index, e)}}
                        tabIndex={-1}
                        onFocus={(e) => {toggleFocus(index, e, true)}}
                        onBlur={(e) => {toggleFocus(index, e, false)}}
                        
                        style={{
                            backgroundColor: sectionHoverList[index] ? GREY_3 : 'white',
                            cursor:'pointer',
                            display:'block',
                            paddingBottom: '1.5rem',
                            paddingTop: '0.5rem'
                        }}
                        >
                            <GridRow>
                                <GridCol>
                                    <H3                  
                                        style={{
                                            backgroundColor: sectionFocusList[index] ? FOCUS_COLOUR : null,
                                            borderBottom: sectionFocusList[index] ? '4px solid'+BLACK : '4px solid transparent',
                                            display:'inline-block',
                                        }}
                                    > 
                                        {section.heading.text}
                                    </H3>
                                </GridCol>
                            </GridRow>
                            <GridRow>
                                <GridCol>
                                    <div 
                                        style={{
                                            backgroundColor: sectionFocusList[index] ? FOCUS_COLOUR : null,
                                            borderBottom: sectionFocusList[index] ? '4px solid'+BLACK : '4px solid transparent',
                                            display:'inline-block',
                                            paddingTop: '0.5rem',
                                    }}>
                                    <SectionChevron 
                                        style={{
                                            backgroundColor: 
                                                sectionFocusList[index] ?  BLACK : sectionHoverList[index] ? BLACK: WHITE, 
                                            backgroundImage: 
                                                sectionFocusList[index] ? 
                                                    `url("data:image/svg+xml,${svgChevron(FOCUS_COLOUR)}")` 
                                                : 
                                                sectionHoverList[index] ? 
                                                    `url("data:image/svg+xml,${svgChevron(WHITE)}")`
                                                :
                                                    `url("data:image/svg+xml,${svgChevron(BLUE)}")`,
                                            color: sectionHoverList[index] ?  '#fff' : BLUE, 
                                            display:'inline-block',
                                            transform: sectionsOpenList[index] ? 'rotate(180deg)' :'rotate(0deg)',
                                        }} 
                                        />
                                        <div 
                                            style={{
                                                color : !sectionHoverList[index] && !sectionFocusList[index] ? BLUE: BLACK,
                                                display: 'inline-block',
                                                fontFamily: 'Arial',
                                                fontSize: '1.1875rem',
                                                paddingLeft: '1.5rem',
                                                paddingBottom: '0.5rem',
                                            }} 
                                        >            
                                            {sectionsOpenList[index] ? 'Hide' : 'Show'}
                                        </div>
                                    </div>
                                </GridCol>
                            </GridRow>
                        </div>

                    {/* Section content */}
                    {sectionsOpenList[index] ? 
                        (<div style={{marginBottom: '4rem', display:'block',fontFamily: 'Arial', fontSize: '1.1875rem', paddingTop:'15px'} } > {section.content}</div>) 
                    : 
                        (<div />)
                    }
                    
                    <SectionBreak visible={true} /> 
                </div>)
            )}
        </>
    );
}