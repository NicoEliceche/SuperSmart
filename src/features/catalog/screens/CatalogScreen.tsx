import { useState } from 'react';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductCarousel } from '../components/ProductCarousel';
import { ProductModal } from '../components/ProductModal';
import { QuoteForm } from '../components/QuoteForm';
import { Reviews } from '../components/Reviews';
import { FAQ } from '../components/FAQ';
import { BusinessShowcase } from '../components/BusinessShowcase';
import {
  advantages,
  catalogLinks,
  categories,
  heroHighlights,
  products,
  trustBadges,
} from '../data/catalogData';
import type { Product } from '../types/catalog.types';
import { contact, createWhatsAppUrl } from '../utils/whatsapp';
import {
  AdvantageCard,
  AdvantageGrid,
  BadgeRow,
  BrandBand,
  BrandBandContent,
  CatalogActions,
  CategoryCard,
  CategoryGrid,
  Container,
  Eyebrow,
  Hero,
  HeroActions,
  HeroCopy,
  HeroImage,
  HeroMedia,
  HeroNote,
  HeroStat,
  HeroStats,
  MainContent,
  ScreenWrapper,
  Section,
  SectionHeader,
  SectionKicker,
  SectionLead,
  SectionTitle,
  TrustBadge,
} from './CatalogScreenStyled';

export const CatalogScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const whatsappUrl = createWhatsAppUrl('Hola Super Smart, quiero cotizar productos para mi vehículo.');

  return (
    <ScreenWrapper>
      <Header />
      <MainContent id="inicio">
        <Hero aria-labelledby="hero-title">
          <Container>
            <HeroCopy>
              <Eyebrow>Super Smart</Eyebrow>
              <h1 id="hero-title">Tecnología y accesorios de alta gama para tu vehículo</h1>
              <p>
                Reproductores Android, marcos adaptadores a medida y accesorios para personalizar
                tu auto con una compra guiada por compatibilidad.
              </p>
              <HeroActions>
                <a href="#productos" aria-label="Ver catálogo de productos Super Smart">
                  Ver catálogo
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contáctanos por WhatsApp con ${contact.company}`}
                >
                  Contáctanos
                </a>
              </HeroActions>
              <BadgeRow aria-label="Ventajas de compra">
                {trustBadges.map((badge) => (
                  <TrustBadge key={badge.text}>
                    <badge.icon aria-hidden="true" size={18} />
                    <span>{badge.text}</span>
                  </TrustBadge>
                ))}
              </BadgeRow>
            </HeroCopy>

            <HeroMedia>
              <picture>
                <source srcSet="/assets/products/android-9-product-kit.webp" type="image/webp" />
                <HeroImage
                  src="/assets/products/android-9-product-kit.jpg"
                  alt="Kit de reproductor Android Super Smart con cámara, cables y antena"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
              <HeroStats>
                {heroHighlights.map((item) => (
                  <HeroStat key={item.label}>
                    <item.icon aria-hidden="true" size={18} />
                    <span>{item.label}</span>
                  </HeroStat>
                ))}
              </HeroStats>
              <HeroNote>Android, marcos, cámaras y accesorios en un solo catálogo.</HeroNote>
            </HeroMedia>
          </Container>
        </Hero>

        <Section id="categorias" aria-labelledby="categories-title">
          <Container>
            <SectionHeader>
              <SectionKicker>Categorías destacadas</SectionKicker>
              <SectionTitle id="categories-title">Todo para renovar el interior y exterior</SectionTitle>
              <SectionLead>
                Un catálogo pensado para resolver pantalla, adaptación, cámara y detalles visuales
                sin mezclar piezas incompatibles.
              </SectionLead>
            </SectionHeader>
            <CategoryGrid>
              {categories.map((category) => (
                <CategoryCard key={category.id}>
                  <category.icon aria-hidden="true" size={26} />
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </CategoryCard>
              ))}
            </CategoryGrid>
          </Container>
        </Section>

        <BusinessShowcase />

        <Section id="productos" aria-labelledby="products-title">
          <Container>
            <SectionHeader>
              <SectionKicker>Productos estrella</SectionKicker>
              <SectionTitle id="products-title">Modelos clave para cotizar hoy</SectionTitle>
              <SectionLead>
                Selección real desde las listas de Super Smart, con detalles listos para pedir por
                WhatsApp y catálogos descargables para consultar.
              </SectionLead>
            </SectionHeader>
            <ProductCarousel products={products} onOpenProduct={setSelectedProduct} />
          </Container>
        </Section>

        <BrandBand id="reproductores" aria-labelledby="catalog-title">
          <BrandBandContent>
            <div>
              <SectionKicker>Catálogo descargable</SectionKicker>
              <SectionTitle id="catalog-title">Revisa accesorios, reproductores y marcos en PDF</SectionTitle>
            </div>
            <CatalogActions>
              {catalogLinks.map((link) => (
                <a key={link.href} href={link.href} download aria-label={`Descargar ${link.label}`}>
                  {link.label}
                </a>
              ))}
            </CatalogActions>
          </BrandBandContent>
        </BrandBand>

        <Section id="marcos" aria-labelledby="advantages-title">
          <Container>
            <SectionHeader>
              <SectionKicker>Por qué elegirnos</SectionKicker>
              <SectionTitle id="advantages-title">Compatibilidad primero, compra más clara</SectionTitle>
              <SectionLead>
                La selección se arma alrededor del vehículo, no solo del producto. Eso mejora la
                experiencia al instalar pantallas, marcos y accesorios.
              </SectionLead>
            </SectionHeader>
            <AdvantageGrid>
              {advantages.map((advantage) => (
                <AdvantageCard key={advantage.title}>
                  <advantage.icon aria-hidden="true" size={24} />
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </AdvantageCard>
              ))}
            </AdvantageGrid>
          </Container>
        </Section>

        <Reviews />
        <FAQ />
        <QuoteForm />
      </MainContent>
      <Footer />
      <FloatingWhatsApp />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </ScreenWrapper>
  );
};
