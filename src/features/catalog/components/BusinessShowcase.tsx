import { CheckCircle2, Gauge, SearchCheck } from 'lucide-react';
import {
  compatibilityChecks,
  compatibilityFlow,
  compatibilityKpis,
  compatibilityModules,
} from '../data/catalogData';
import {
  Bar,
  BarGroup,
  BusinessIntro,
  BusinessSection,
  BusinessShell,
  CheckItem,
  CheckList,
  DashboardGrid,
  DashboardPanel,
  FlowPanel,
  KpiCard,
  KpiGrid,
  ModuleItem,
  ModuleRail,
  PanelBadge,
  PanelHeader,
  PanelMain,
  PanelSidebar,
  PanelTitle,
  ProgressFill,
  ProgressTrack,
  StatusDot,
} from './BusinessShowcaseStyled';

export const BusinessShowcase = () => {
  return (
    <BusinessSection aria-labelledby="business-showcase-title">
      <BusinessShell>
        <BusinessIntro>
          <span>Centro de compatibilidad</span>
          <h2 id="business-showcase-title">Una compra con lógica de panel profesional</h2>
          <p>
            La cotización se organiza como un flujo: vehículo, tablero, cablería y producto correcto.
            El objetivo es que cada cliente llegue a WhatsApp con la información necesaria.
          </p>
        </BusinessIntro>

        <DashboardPanel>
          <PanelSidebar aria-label="Módulos de asesoría">
            <PanelTitle>
              <Gauge aria-hidden="true" size={20} />
              <span>Smart Fit</span>
            </PanelTitle>
            <ModuleRail>
              {compatibilityModules.map((module) => (
                <ModuleItem key={module.title}>
                  <module.icon aria-hidden="true" size={18} />
                  <span>
                    <strong>{module.title}</strong>
                    <small>{module.subtitle}</small>
                  </span>
                </ModuleItem>
              ))}
            </ModuleRail>
          </PanelSidebar>

          <PanelMain>
            <PanelHeader>
              <div>
                <span>Super Smart</span>
                <strong>Asesoría de catálogo</strong>
              </div>
              <PanelBadge>
                <StatusDot />
                Activo por WhatsApp
              </PanelBadge>
            </PanelHeader>

            <KpiGrid>
              {compatibilityKpis.map((kpi) => (
                <KpiCard key={kpi.label}>
                  <span>{kpi.label}</span>
                  <strong>{kpi.value}</strong>
                  <small>{kpi.detail}</small>
                </KpiCard>
              ))}
            </KpiGrid>

            <DashboardGrid>
              <FlowPanel>
                <div>
                  <SearchCheck aria-hidden="true" size={20} />
                  <strong>Validación previa</strong>
                </div>
                <BarGroup aria-label="Progreso de validación de compatibilidad">
                  {compatibilityFlow.map((step) => (
                    <Bar key={step.label}>
                      <span>{step.label}</span>
                      <ProgressTrack>
                        <ProgressFill $value={step.value} />
                      </ProgressTrack>
                      <strong>{step.value}%</strong>
                    </Bar>
                  ))}
                </BarGroup>
              </FlowPanel>

              <CheckList>
                {compatibilityChecks.map((check) => (
                  <CheckItem key={check}>
                    <CheckCircle2 aria-hidden="true" size={18} />
                    <span>{check}</span>
                  </CheckItem>
                ))}
              </CheckList>
            </DashboardGrid>
          </PanelMain>
        </DashboardPanel>
      </BusinessShell>
    </BusinessSection>
  );
};
