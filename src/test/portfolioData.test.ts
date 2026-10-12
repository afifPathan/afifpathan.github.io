import { describe, it, expect } from 'vitest';
import {
  PERSONAL_INFO,
  PROJECTS,
  EXPERIENCES,
  SKILL_CATEGORIES,
  EDUCATION_DATA,
  TESTIMONIALS,
} from '../data/portfolioData';

describe('Portfolio Data Integrity & Truthfulness', () => {
  it('contains authentic personal information without undefined or placeholder values', () => {
    expect(PERSONAL_INFO.name).toBe('Afif Pathan');
    expect(PERSONAL_INFO.title).toBe('Senior Mobile Architect & Flutter Lead');
    expect(PERSONAL_INFO.yearsTotal).toBe('8+');
    expect(PERSONAL_INFO.yearsMobile).toBe('6+');
    expect(PERSONAL_INFO.productionPlatforms).toBe('25+');
    expect(PERSONAL_INFO.email).toBe('afif.pathan52@gmail.com');
    expect(PERSONAL_INFO.github).toContain('github.com/afifPathan');
    expect(PERSONAL_INFO.linkedin).toContain('linkedin.com/in/afif-pathan');
  });

  it('contains real companies in experience list matching CV', () => {
    const companies = EXPERIENCES.map((e) => e.company);
    expect(companies.some((c) => c.includes('Degreed'))).toBe(true);
    expect(companies.some((c) => c.includes('Webclues'))).toBe(true);
    expect(companies.some((c) => c.includes('Mvpex'))).toBe(true);
  });

  it('has valid projects with real titles, problems and architectures', () => {
    expect(PROJECTS.length).toBeGreaterThanOrEqual(10);
    PROJECTS.forEach((proj) => {
      expect(proj.id).toBeTruthy();
      expect(proj.title).toBeTruthy();
      expect(proj.problem).toBeTruthy();
      expect(proj.architecture).toBeTruthy();
      expect(proj.contributions.length).toBeGreaterThan(0);
      expect(proj.technologies.length).toBeGreaterThan(0);
    });
  });

  it('has comprehensive skills across core engineering categories', () => {
    expect(SKILL_CATEGORIES.length).toBeGreaterThanOrEqual(4);
    const categoryNames = SKILL_CATEGORIES.map((c) => c.name);
    expect(categoryNames).toContain('Mobile Engineering');
    expect(categoryNames).toContain('Software Architecture');
    expect(categoryNames).toContain('State Management');
  });

  it('maintains accredited education degrees', () => {
    expect(EDUCATION_DATA.length).toBe(2);
    expect(EDUCATION_DATA[0].degree).toContain('Information Technology');
    expect(EDUCATION_DATA[1].degree).toContain('Information Technology');
  });

  it('strictly maintains empty testimonials array until authentic recommendations are provided', () => {
    expect(TESTIMONIALS).toEqual([]);
  });

  it('contains zero banned strings in data structures', () => {
    const serialized = JSON.stringify({
      PERSONAL_INFO,
      PROJECTS,
      EXPERIENCES,
      SKILL_CATEGORIES,
      EDUCATION_DATA,
      TESTIMONIALS,
    });

    expect(serialized).not.toContain('TODO');
    expect(serialized).not.toContain('lorem');
    expect(serialized).not.toContain('#AP-');
    expect(serialized).not.toContain('[object');
  });
});
