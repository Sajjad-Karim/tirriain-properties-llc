import { Link } from "react-router-dom";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Shield,
  FileText,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { config, formatFullAddress } from "@/lib/config";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="container mx-auto relative px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5 opacity-0 animate-fade-up"
                style={{ animationDelay: "0ms" }}
              >
                <Shield className="h-3.5 w-3.5" />
                A2P 10DLC Compliant
              </div>

              <h1
                className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[2.75rem] font-serif font-bold text-foreground mb-5 leading-[1.15] opacity-0 animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                {config.companyName}
              </h1>

              <p
                className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                Your trusted partner in {config.industry.toLowerCase()}. We
                provide professional services with transparent communication and
                full regulatory compliance.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 opacity-0 animate-fade-up"
                style={{ animationDelay: "300ms" }}
              >
                <Button asChild size="lg" className="h-11 px-5 text-sm font-medium">
                  <Link to="/sms-optin">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Subscribe to SMS
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-11 px-5 text-sm font-medium"
                >
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div
                className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-muted-foreground opacity-0 animate-fade-up"
                style={{ animationDelay: "400ms" }}
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  TCPA Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  Easy Opt-out
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  No Spam
                </span>
              </div>
            </div>

            {/* Right Content - Stats Card */}
            <div
              className="relative opacity-0 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-7 shadow-lg shadow-black/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base">
                      {config.companyName}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {config.industry} Solutions
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/60 rounded-xl">
                    <div className="w-9 h-9 bg-background rounded-lg flex items-center justify-center shrink-0 border border-border">
                      <MapPin className="h-4 w-4 text-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                        Location
                      </p>
                      <p className="text-sm font-medium truncate">
                        {config.address.city}, {config.address.state}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-muted/60 rounded-xl">
                    <div className="w-9 h-9 bg-background rounded-lg flex items-center justify-center shrink-0 border border-border">
                      <Phone className="h-4 w-4 text-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                        Phone
                      </p>
                      <a
                        href={`tel:${config.contact.phoneRaw}`}
                        className="text-sm font-medium hover:text-muted-foreground transition-colors"
                      >
                        {config.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-muted/60 rounded-xl">
                    <div className="w-9 h-9 bg-background rounded-lg flex items-center justify-center shrink-0 border border-border">
                      <Mail className="h-4 w-4 text-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                        Email
                      </p>
                      <a
                        href={`mailto:${config.contact.email}`}
                        className="text-sm font-medium hover:text-muted-foreground transition-colors truncate block"
                      >
                        {config.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Contact:{" "}
                    <span className="font-medium text-foreground">
                      {config.contact.name}
                    </span>
                  </p>
                </div>
              </div>

              <div className="absolute -z-10 -top-3 -right-3 w-full h-full bg-primary/5 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">
              Our Commitment
            </span>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground">
              Why Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
            <Card className="text-center border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 rounded-xl">
              <CardHeader className="pb-2 pt-6 px-6">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base font-serif">
                  SMS Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-sm leading-relaxed">
                  Stay informed with timely SMS notifications about{" "}
                  {config.useCase}.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 rounded-xl">
              <CardHeader className="pb-2 pt-6 px-6">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base font-serif">
                  Full Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-sm leading-relaxed">
                  A2P 10DLC and TCPA compliant. Your privacy and preferences are
                  always respected.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 rounded-xl">
              <CardHeader className="pb-2 pt-6 px-6">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base font-serif">
                  Transparency
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-sm leading-relaxed">
                  Clear terms, easy opt-out. We believe in transparent
                  communication at all times.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3 block">
              Company Info
            </span>
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-3">
              About Our Business
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              Learn more about who we are and how to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
            <Card className="border-border shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl">
              <CardHeader className="pb-4 px-6 pt-6">
                <CardTitle className="flex items-center gap-3 font-serif text-lg">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  Company Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6">
                <div className="flex justify-between items-start border-b border-border pb-4">
                  <span className="text-sm text-muted-foreground">
                    Business Name
                  </span>
                  <span className="font-medium text-right">
                    {config.companyName}
                  </span>
                </div>
                <div className="flex justify-between items-start border-b border-border pb-4">
                  <span className="text-sm text-muted-foreground">
                    Business Type
                  </span>
                  <span className="font-medium text-right">
                    {config.businessType}
                  </span>
                </div>
                <div className="flex justify-between items-start border-b border-border pb-4">
                  <span className="text-sm text-muted-foreground">
                    Industry
                  </span>
                  <span className="font-medium text-right">
                    {config.industry}
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-sm text-muted-foreground">
                    Contact Person
                  </span>
                  <span className="font-medium text-right">
                    {config.contact.name}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl">
              <CardHeader className="pb-4 px-6 pt-6">
                <CardTitle className="flex items-center gap-3 font-serif text-lg">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-6 pb-6">
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                  <p className="font-medium">{formatFullAddress()}</p>
                </div>
                <div className="border-b border-border pb-4">
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a
                    href={`tel:${config.contact.phoneRaw}`}
                    className="font-medium flex items-center gap-2 hover:text-muted-foreground transition-colors w-fit"
                  >
                    <Phone className="h-4 w-4" />
                    {config.contact.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="font-medium flex items-center gap-2 hover:text-muted-foreground transition-colors w-fit"
                  >
                    <Mail className="h-4 w-4" />
                    {config.contact.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-header text-header-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-header-foreground/70 mb-3 block">
            Stay Connected
          </span>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
            Ready to Stay Connected?
          </h2>
          <p className="text-header-foreground/80 mb-8 max-w-xl mx-auto text-base leading-relaxed">
            Subscribe to our SMS updates and never miss important information
            about {config.useCase}.
          </p>
          <Button asChild size="lg" className="h-11 px-6 text-sm font-medium">
            <Link to="/sms-optin">
              Subscribe Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
