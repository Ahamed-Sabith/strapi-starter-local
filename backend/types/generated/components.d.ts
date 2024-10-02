import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedVideoEmbed extends Schema.Component {
  collectionName: 'components_sections_video_embeds';
  info: {
    displayName: 'Video Embed';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text & Attribute.Required;
    author: Attribute.String;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    picture: Attribute.Media<'images'>;
  };
}

export interface SectionsTestimonialsGroup extends Schema.Component {
  collectionName: 'components_slices_testimonials_groups';
  info: {
    name: 'TestimonialsGroup';
    displayName: 'Testimonials';
    icon: 'user-friends';
    description: '';
  };
  attributes: {
    testimonials: Attribute.Component<'elements.testimonial', true>;
  };
}

export interface SectionsTechnology extends Schema.Component {
  collectionName: 'components_sections_technologies';
  info: {
    displayName: 'Technology';
    description: '';
  };
  attributes: {
    heading: Attribute.Text;
    logos: Attribute.Component<'shared.media', true>;
    technologies: Attribute.Text;
  };
}

export interface SectionsService extends Schema.Component {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Service';
    description: '';
  };
  attributes: {
    services: Attribute.Component<'elements.service-text', true>;
    buttons: Attribute.Component<'links.button-link'>;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    name: 'RichText';
    displayName: 'Rich text';
    icon: 'text-height';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsProjects extends Schema.Component {
  collectionName: 'components_sections_projects';
  info: {
    displayName: 'Project';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    projects: Attribute.Component<'elements.projects', true>;
    buttons: Attribute.Component<'links.button-link'>;
  };
}

export interface SectionsPricing extends Schema.Component {
  collectionName: 'components_sections_pricings';
  info: {
    name: 'Pricing';
    displayName: 'Pricing';
    icon: 'dollar-sign';
  };
  attributes: {
    title: Attribute.String;
    plans: Attribute.Component<'elements.plan', true>;
  };
}

export interface SectionsLeadForm extends Schema.Component {
  collectionName: 'components_sections_lead_forms';
  info: {
    name: 'Lead form';
    displayName: 'Lead form';
    icon: 'at';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    emailPlaceholder: Attribute.String;
    submitButton: Attribute.Component<'links.button'>;
    location: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SectionsLargeVideo extends Schema.Component {
  collectionName: 'components_slices_large_videos';
  info: {
    name: 'LargeVideo';
    displayName: 'Large video';
    icon: 'play-circle';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    video: Attribute.Media<'videos'> & Attribute.Required;
    poster: Attribute.Media<'images'>;
  };
}

export interface SectionsImageTest extends Schema.Component {
  collectionName: 'components_sections_image_tests';
  info: {
    displayName: 'Image test';
  };
  attributes: {
    text: Attribute.String;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    name: 'Hero';
    displayName: 'Hero';
    icon: 'heading';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    picture: Attribute.Media<'images'> & Attribute.Required;
    text: Attribute.String;
    buttons: Attribute.Component<'links.button-link', true>;
    title1: Attribute.String;
  };
}

export interface SectionsHeading extends Schema.Component {
  collectionName: 'components_sections_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    description: Attribute.String;
  };
}

export interface SectionsFeatures extends Schema.Component {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'Features';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<'elements.feature', true>;
  };
}

export interface SectionsFeatureRowsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    name: 'FeatureRowsGroup';
    displayName: 'Feaures row group';
    icon: 'bars';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatureColumnsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    name: 'FeatureColumnsGroup';
    displayName: 'Feature columns group';
    icon: 'star-of-life';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsDirectorSQuote extends Schema.Component {
  collectionName: 'components_sections_director_s_quotes';
  info: {
    displayName: 'Directors quote';
    description: '';
  };
  attributes: {
    quote1: Attribute.Text;
    quote2: Attribute.Text;
    author: Attribute.String;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsDirection extends Schema.Component {
  collectionName: 'components_sections_directions';
  info: {
    displayName: 'Direction';
  };
  attributes: {
    text1: Attribute.Text;
    text2: Attribute.Text;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsContact extends Schema.Component {
  collectionName: 'components_sections_contact_s';
  info: {
    displayName: 'Contact ';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    buttons: Attribute.Component<'links.button-link', true>;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionsClient extends Schema.Component {
  collectionName: 'components_sections_clients';
  info: {
    displayName: 'Client';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface SectionsBottomActions extends Schema.Component {
  collectionName: 'components_slices_bottom_actions';
  info: {
    name: 'BottomActions';
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    buttons: Attribute.Component<'links.button-link', true>;
    description: Attribute.Text;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'Social Link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    social: Attribute.Enumeration<
      [
        'YOUTUBE',
        'TWITTER',
        'DISCORD',
        'WEBSITE',
        'FACEBOOK',
        'INSTAGRAM',
        'LINKEDIN'
      ]
    >;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    name: 'Link';
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    name: 'Button';
    displayName: 'Button';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    name: 'Button-link';
    displayName: 'Button link';
    icon: 'fingerprint';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    name: 'Metadata';
    displayName: 'Metadata';
    icon: 'robot';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    name: 'Navbar';
    displayName: 'Navbar';
    icon: 'map-signs';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    button: Attribute.Component<'links.button-link'>;
    navbarLogo: Attribute.Component<'layout.logo'>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    logoImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    logoText: Attribute.String;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Component<'layout.logo'>;
    menuLinks: Attribute.Component<'links.link', true>;
    legalLinks: Attribute.Component<'links.link', true>;
    socialLinks: Attribute.Component<'links.social-link', true>;
    categories: Attribute.Relation<
      'layout.footer',
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface ElementsTestimonial extends Schema.Component {
  collectionName: 'components_slices_testimonials';
  info: {
    name: 'Testimonial';
    displayName: 'Testimonial';
    icon: 'user-check';
    description: '';
  };
  attributes: {
    testimonial: Attribute.Text;
    author: Attribute.String;
  };
}

export interface ElementsServiceText extends Schema.Component {
  collectionName: 'components_elements_service_texts';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    paragraph: Attribute.Text;
    picture: Attribute.Media<'images'>;
  };
}

export interface ElementsProjects extends Schema.Component {
  collectionName: 'components_elements_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    projectHeading: Attribute.String;
    description: Attribute.Text;
    tags: Attribute.String;
  };
}

export interface ElementsPlan extends Schema.Component {
  collectionName: 'components_elements_plans';
  info: {
    name: 'plan';
    displayName: 'Pricing plan';
    icon: 'search-dollar';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    isRecommended: Attribute.Boolean;
    price: Attribute.Decimal;
    pricePeriod: Attribute.String;
    product_features: Attribute.Relation<
      'elements.plan',
      'oneToMany',
      'api::product-feature.product-feature'
    >;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    name: 'NotificationBanner';
    displayName: 'Notification banner';
    icon: 'exclamation';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['alert', 'info', 'warning']> &
      Attribute.Required;
    heading: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.Component<'links.link'>;
  };
}

export interface ElementsLogos extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    name: 'logos';
    displayName: 'Logos';
    icon: 'apple-alt';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media<'images'>;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    name: 'FooterSection';
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'links.link', true>;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    showLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    url: Attribute.String;
    text: Attribute.String;
  };
}

export interface ElementsFeatureRow extends Schema.Component {
  collectionName: 'components_slices_feature_rows';
  info: {
    name: 'FeatureRow';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    media: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    link: Attribute.Component<'links.link'>;
  };
}

export interface ElementsFeatureColumn extends Schema.Component {
  collectionName: 'components_slices_feature_columns';
  info: {
    name: 'FeatureColumn';
    displayName: 'Feature column';
    icon: 'align-center';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ElementsClientLogo extends Schema.Component {
  collectionName: 'components_elements_client_logos';
  info: {
    displayName: 'Client logo';
  };
  attributes: {
    picture: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.video-embed': SharedVideoEmbed;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'sections.testimonials-group': SectionsTestimonialsGroup;
      'sections.technology': SectionsTechnology;
      'sections.service': SectionsService;
      'sections.rich-text': SectionsRichText;
      'sections.projects': SectionsProjects;
      'sections.pricing': SectionsPricing;
      'sections.lead-form': SectionsLeadForm;
      'sections.large-video': SectionsLargeVideo;
      'sections.image-test': SectionsImageTest;
      'sections.hero': SectionsHero;
      'sections.heading': SectionsHeading;
      'sections.features': SectionsFeatures;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.director-s-quote': SectionsDirectorSQuote;
      'sections.direction': SectionsDirection;
      'sections.contact': SectionsContact;
      'sections.client': SectionsClient;
      'sections.bottom-actions': SectionsBottomActions;
      'links.social-link': LinksSocialLink;
      'links.link': LinksLink;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'meta.metadata': MetaMetadata;
      'layout.navbar': LayoutNavbar;
      'layout.logo': LayoutLogo;
      'layout.footer': LayoutFooter;
      'elements.testimonial': ElementsTestimonial;
      'elements.service-text': ElementsServiceText;
      'elements.projects': ElementsProjects;
      'elements.plan': ElementsPlan;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.logos': ElementsLogos;
      'elements.footer-section': ElementsFooterSection;
      'elements.feature': ElementsFeature;
      'elements.feature-row': ElementsFeatureRow;
      'elements.feature-column': ElementsFeatureColumn;
      'elements.client-logo': ElementsClientLogo;
    }
  }
}
