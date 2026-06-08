import styled from 'styled-components';

export const BusinessSection = styled.section`
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.layout.screenPaddingH};
  background:
    radial-gradient(circle at top right, ${({ theme }) => theme.color.surfaceGlassStrong}, transparent 34%),
    ${({ theme }) => theme.color.neutral[900]};
  color: ${({ theme }) => theme.color.textInverse};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[20]} ${({ theme }) => theme.layout.screenPaddingHDesktop};
  }
`;

export const BusinessShell = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  display: grid;
  gap: ${({ theme }) => theme.spacing[8]};
`;

export const BusinessIntro = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
  max-width: 46rem;

  span {
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.bold};

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.typography.size.xl};
    }
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.size['4xl']};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  p {
    color: ${({ theme }) => theme.color.neutral[200]};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    h2 {
      font-size: ${({ theme }) => theme.typography.size['5xl']};
    }
  }
`;

export const DashboardPanel = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.borderInverse};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.color.surfaceGlass};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(13rem, 0.28fr) minmax(0, 1fr);
  }
`;

export const PanelSidebar = styled.aside`
  display: grid;
  align-content: start;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.color.ctaGradient};
`;

export const PanelTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textInverse};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  font-size: ${({ theme }) => theme.typography.size.lg};

  svg {
    color: ${({ theme }) => theme.color.textInverse};
  }
`;

export const ModuleRail = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow-x: visible;
  }
`;

export const ModuleItem = styled.div`
  min-height: ${({ theme }) => theme.spacing[14]};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.borderInverse};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: rgba(255, 255, 255, 0.14);

  svg {
    color: ${({ theme }) => theme.color.textInverse};
    flex-shrink: 0;
  }

  span {
    min-width: 0;
    display: grid;
    gap: ${({ theme }) => theme.spacing[1]};
  }

  strong,
  small {
    overflow-wrap: anywhere;
  }

  strong {
    font-size: ${({ theme }) => theme.typography.size.sm};
    color: ${({ theme }) => theme.color.textInverse};
  }

  small {
    color: rgba(255, 255, 255, 0.84);
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const PanelMain = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[5]};
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};

  div {
    display: grid;
    gap: ${({ theme }) => theme.spacing[1]};
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  strong {
    font-size: ${({ theme }) => theme.typography.size.xl};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const PanelBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: ${({ theme }) => theme.spacing[10]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background-color: ${({ theme }) => theme.color.accentLight};
  color: ${({ theme }) => theme.color.accentDark};
  white-space: nowrap;
`;

export const StatusDot = styled.i`
  width: ${({ theme }) => theme.spacing[2]};
  height: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background-color: ${({ theme }) => theme.color.accent};
  box-shadow: ${({ theme }) => theme.shadow.glow};
`;

export const KpiGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const KpiCard = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 8rem;
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.color.surface} 0%, ${({ theme }) => theme.color.surfaceAlt} 100%);

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  strong {
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.typography.size['2xl']};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    overflow-wrap: anywhere;
  }

  small {
    color: ${({ theme }) => theme.color.textSecondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;

export const DashboardGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1.15fr) minmax(16rem, 0.85fr);
  }
`;

export const FlowPanel = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.color.neutral[50]};

  > div:first-child {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.color.text};

    svg {
      color: ${({ theme }) => theme.color.magenta};
    }
  }
`;

export const BarGroup = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const Bar = styled.div`
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr) 3rem;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};

  span,
  strong {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`;

export const ProgressTrack = styled.div`
  height: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background-color: ${({ theme }) => theme.color.primarySoft};
  overflow: hidden;
`;

export const ProgressFill = styled.i<{ $value: number }>`
  display: block;
  width: ${({ $value }) => `${$value}%`};
  height: 100%;
  border-radius: inherit;
  background: ${({ theme }) => theme.color.brandGradient};
`;

export const CheckList = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const CheckItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.color.surface};

  svg {
    color: ${({ theme }) => theme.color.accentDark};
    flex-shrink: 0;
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;
