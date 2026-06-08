import styled from 'styled-components';

// ── Layout ──────────────────────────────────────────────────────────────────

export const ScreenWrapper = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(circle at top right, ${({ theme }) => theme.color.accentLight}, transparent 28rem),
    ${({ theme }) => theme.color.background};
`;

export const MainContent = styled.main`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.screenPaddingH};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.layout.screenPaddingHDesktop};
  }
`;

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing[16]} 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[20]} 0;
  }
`;

export const SectionHeader = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  max-width: 42rem;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

export const SectionKicker = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.xl};
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['4xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  overflow-wrap: anywhere;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['5xl']};
  }
`;

export const SectionLead = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

// ── Hero ────────────────────────────────────────────────────────────────────

export const Hero = styled.section`
  padding: ${({ theme }) => theme.spacing[6]} 0 ${({ theme }) => theme.spacing[8]};
  background: ${({ theme }) => theme.color.heroGradient};
  color: ${({ theme }) => theme.color.textInverse};

  ${Container} {
    display: grid;
    gap: ${({ theme }) => theme.spacing[8]};
    padding-top: ${({ theme }) => theme.layout.headerHeight};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[12]} 0 ${({ theme }) => theme.spacing[16]};
    min-height: 92vh;
    display: grid;
    align-items: center;

    ${Container} {
      grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.85fr);
      align-items: center;
      padding-top: ${({ theme }) => theme.spacing[16]};
    }
  }
`;

export const HeroCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};

  h1 {
    margin: 0;
    max-width: 46rem;
    font-size: ${({ theme }) => theme.typography.size['3xl']};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    overflow-wrap: anywhere;
  }

  p {
    margin: 0;
    max-width: 40rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: ${({ theme }) => theme.typography.size.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    h1 {
      font-size: ${({ theme }) => theme.typography.size['4xl']};
    }

    p {
      font-size: ${({ theme }) => theme.typography.size.lg};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    h1 {
      font-size: ${({ theme }) => theme.typography.size['5xl']};
    }
  }
`;

export const Eyebrow = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};

  a {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
    border-radius: ${({ theme }) => theme.radius.md};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  }

  a:first-child {
    border: 1px solid ${({ theme }) => theme.color.primarySoft};
    background-color: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.primaryDark};
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  a:last-child {
    border: 1px solid rgba(255, 255, 255, 0.28);
    background-color: rgba(255, 255, 255, 0.18);
    color: ${({ theme }) => theme.color.textInverse};
  }

  a:hover {
    transform: translateY(-0.125rem);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const TrustBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: ${({ theme }) => theme.spacing[10]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.primarySoft};
  border-radius: ${({ theme }) => theme.radius.full};
  background-color: ${({ theme }) => theme.color.neutral[900]};
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const HeroMedia = styled.div`
  position: relative;
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  aspect-ratio: ${({ theme }) => theme.layout.heroImageRatio};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  background-color: ${({ theme }) => theme.color.surface};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    aspect-ratio: ${({ theme }) => theme.layout.heroImageRatioDesktop};
  }
`;

export const HeroStats = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const HeroStat = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  min-height: ${({ theme }) => theme.spacing[12]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  span {
    overflow-wrap: anywhere;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[2]};
    padding: ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`;

export const HeroNote = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

// ── Categories ──────────────────────────────────────────────────────────────

export const CategoryGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const CategoryCard = styled.article`
  min-height: 100%;
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  svg {
    color: ${({ theme }) => theme.color.accentDark};
  }

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.xl};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.color.textSecondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;

// ── Products ────────────────────────────────────────────────────────────────

// ── Brand band ──────────────────────────────────────────────────────────────

export const BrandBand = styled.section`
  padding: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.layout.screenPaddingH};
  background: ${({ theme }) => theme.color.ctaGradient};
  color: ${({ theme }) => theme.color.textInverse};

  ${SectionKicker},
  ${SectionTitle} {
    color: ${({ theme }) => theme.color.textInverse};
  }
`;

export const BrandBandContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  display: grid;
  gap: ${({ theme }) => theme.spacing[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(22rem, 0.8fr);
    align-items: center;
  }
`;

export const CatalogActions = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  a {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    border: 1px solid ${({ theme }) => theme.color.primarySoft};
    border-radius: ${({ theme }) => theme.radius.md};
    background-color: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.primaryDark};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  a:hover {
    transform: translateY(-0.125rem);
    box-shadow: ${({ theme }) => theme.shadow.md};
  }
`;

// ── Advantages ──────────────────────────────────────────────────────────────

export const AdvantageGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const AdvantageCard = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};

  svg {
    color: ${({ theme }) => theme.color.primary};
  }

  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.size.lg};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.color.textSecondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;
