import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { PERSONAL_INFO } from '../data/portfolioData';

describe('Afif Pathan Senior Mobile Architect Portfolio', () => {
  it('renders primary hero headline with correct name and titles', () => {
    render(<App />);
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings.length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Afif Pathan/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Senior Mobile Architect/i).length).toBeGreaterThan(0);
  });

  it('renders verified contact channels from CV', () => {
    render(<App />);
    expect(screen.getAllByText(PERSONAL_INFO.email).length).toBeGreaterThan(0);
    expect(screen.getAllByText(PERSONAL_INFO.phone).length).toBeGreaterThan(0);
  });

  it('renders key projects from CV', () => {
    render(<App />);
    expect(screen.getAllByText(/Buyzaar/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Trading Bot Terminal Dashboard/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Degreed Enterprise Mobile/i).length).toBeGreaterThan(0);
  });

  it('renders architecture philosophy and clean architecture sections', () => {
    render(<App />);
    expect(screen.getAllByText(/Architecture & System Philosophy/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Enterprise Clean Architecture & System Boundary Model/i).length).toBeGreaterThan(0);
  });

  it('renders resume download buttons targeting /resume.pdf', () => {
    render(<App />);
    const resumeLinks = screen.getAllByRole('link', { name: /resume|download verified cv/i });
    expect(resumeLinks.length).toBeGreaterThan(0);
    const hasResumeLink = resumeLinks.some((link) => link.getAttribute('href') === '/resume.pdf');
    expect(hasResumeLink).toBe(true);
  });

  it('renders 25+ production systems metric and newly added CV projects', () => {
    render(<App />);
    expect(screen.getAllByText(/25\+/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Practo Doctor Hub/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Diversified Maintenance/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Smart Gate \(VMS\)/i).length).toBeGreaterThan(0);
  });
});
