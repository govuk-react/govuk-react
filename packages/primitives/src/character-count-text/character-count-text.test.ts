import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { countMessage, countOf } from '.';

const imports = (file: string, seen = new Set<string>()): Set<string> => {
  if (seen.has(file)) return seen;
  seen.add(file);
  const source = fs.readFileSync(file, 'utf8');
  for (const [, specifier] of source.matchAll(/from '(\.[^']+)\.js'/g)) {
    const base = path.resolve(path.dirname(file), specifier);
    imports(fs.existsSync(`${base}.ts`) ? `${base}.ts` : `${base}.tsx`, seen);
  }
  return seen;
};

describe('character-count-text', () => {
  it('counts code units, characters and words', () => {
    expect(countOf('👍 ok', 'length')).toBe(5);
    expect(countOf('👍 ok', 'characters')).toBe(4);
    expect(countOf('one two  three', 'words')).toBe(3);
  });

  it('builds the message and state for what is left', () => {
    expect(countMessage(1, 'characters', {})).toEqual({ state: 'under', text: 'You have 1 character remaining' });
    expect(countMessage(0, 'words', {})).toEqual({ state: 'at', text: 'You have 0 words remaining' });
    expect(countMessage(-2, 'words', { 'words-over-limit-text': '%{count} over' })).toEqual({
      state: 'over',
      text: '2 over',
    });
  });

  it('has no client module in what it imports, so server components can call it', () => {
    const files = [...imports(path.join(__dirname, 'index.ts'))];
    expect(files.length).toBeGreaterThan(1);
    for (const file of files) expect(fs.readFileSync(file, 'utf8')).not.toMatch(/^'use client'/);
  });
});
