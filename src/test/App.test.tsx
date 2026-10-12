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

  it('renders active contact channels from CV', async () => {
    render(<App />);
    const emailMatches = await screen.findAllByText(new RegExp(PERSONAL_INFO.email, 'i'));
    expect(emailMatches.length).toBeGreaterThan(0);
  });

  it('renders key projects from CV', async () => {
    render(<App />);
    const buyzaar = await screen.findAllByText(/Buyzaar/i);
    expect(buyzaar.length).toBeGreaterThan(0);
    const tradingBot = await screen.findAllByText(/Trading Bot Terminal Dashboard/i);
    expect(tradingBot.length).toBeGreaterThan(0);
    const degreed = await screen.findAllByText(/Degreed Enterprise Mobile/i);
    expect(degreed.length).toBeGreaterThan(0);
  });

  it('renders architecture philosophy and clean architecture sections', async () => {
    render(<App />);
    const philosophy = await screen.findAllByText(/Architecture & System Philosophy/i);
    expect(philosophy.length).toBeGreaterThan(0);
    const model = await screen.findAllByText(/Enterprise Clean Architecture & System Boundary Model/i);
    expect(model.length).toBeGreaterThan(0);
  });

  it('renders resume download buttons targeting /resume.pdf', () => {
    render(<App />);
    const resumeLinks = screen.getAllByRole('link', { name: /r[eé]sum[eé]|download/i });
    expect(resumeLinks.length).toBeGreaterThan(0);
    const hasResumeLink = resumeLinks.some((link) => link.getAttribute('href') === '/resume.pdf');
    expect(hasResumeLink).toBe(true);
  });

  it('renders 25+ production systems metric and newly added CV projects', async () => {
    render(<App />);
    const systems = await screen.findAllByText(/25\+/i);
    expect(systems.length).toBeGreaterThan(0);
    const practo = await screen.findAllByText(/Practo Doctor Hub/i);
    expect(practo.length).toBeGreaterThan(0);
    const diversified = await screen.findAllByText(/Diversified Maintenance/i);
    expect(diversified.length).toBeGreaterThan(0);
    const smartGate = await screen.findAllByText(/Smart Gate \(VMS\)/i);
    expect(smartGate.length).toBeGreaterThan(0);
  });

  it('renders accessible navigation links and skip to content landmark', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
  });

  it('provides working theme toggle control', () => {
    render(<App />);
    const themeBtn = screen.getByRole('button', { name: /switch to (light|dark) mode/i });
    expect(themeBtn).toBeInTheDocument();
  });

  it('renders career experience timeline with company nodes and current role highlight', async () => {
    render(<App />);
    const experienceRegion = await screen.findByRole('region', { name: /experience and career timeline/i });
    expect(experienceRegion).toBeInTheDocument();
    expect((await screen.findAllByText(/Degreed Inc/i)).length).toBeGreaterThan(0);
    expect((await screen.findAllByText(/Webclues Infotech/i)).length).toBeGreaterThan(0);
    expect((await screen.findAllByText(/Mvpex Solution/i)).length).toBeGreaterThan(0);
    expect((await screen.findAllByText(/Current Role/i)).length).toBeGreaterThan(0);
  });

  it('renders interactive clean architecture diagram layers and contracts', async () => {
    render(<App />);
    const tablist = await screen.findByRole('tablist', { name: /clean architecture layers/i });
    expect(tablist).toBeInTheDocument();
    expect((await screen.findAllByText(/Presentation Layer/i)).length).toBeGreaterThan(0);
    expect((await screen.findAllByText(/Domain Layer \(Pure Core\)/i)).length).toBeGreaterThan(0);
    expect((await screen.findAllByText(/Application & State Layer/i)).length).toBeGreaterThan(0);
    expect((await screen.findAllByText(/Data & Infrastructure Layer/i)).length).toBeGreaterThan(0);
    expect((await screen.findAllByText(/Dependency Rule/i)).length).toBeGreaterThan(0);
  });
});
