import { ArrowRight, Lock, Star, Users, Zap, MessagesSquare } from 'lucide-react';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

const Community = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Join Maximally Community | Global Builder Innovation League"
        description="Join the world's most vibrant innovation community. Connect with builders, creators, and hackers from around the globe."
      />

      {/* Community Entry Points */}
      <section className="pt-24 pb-12 bg-maximally-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 animate-grid-flow" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-press-start text-2xl md:text-3xl mb-6">
              Choose Your Platform_
            </h1>
            <p className="font-jetbrains text-lg md:text-xl mb-8 text-white/80">
              Join 1000+ ambitious builders creating the future, worldwide
            </p>
            <div className="flex justify-center max-w-md mx-auto">
              <div className="pixel-border p-8 bg-gradient-to-br from-[#5865F2]/20 to-[#7289DA]/20 hover:from-[#5865F2]/30 hover:to-[#7289DA]/30 transition-all group w-full">
                <div className="mb-6">
                  <MessagesSquare className="h-16 w-16 mx-auto text-[#5865F2] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-press-start text-xl mb-4 text-center">Discord Server</h3>
                <p className="font-jetbrains mb-6 text-white/70 text-center">Join thousands of builders, creators, and innovators from around the globe</p>
                <button 
                  onClick={() => window.location.href = 'https://discord.gg/S2YyGtBWKa'}
                  className="pixel-button bg-[#5865F2] text-white w-full group-hover:scale-105 transition-transform"
                >
                  Join Discord →
                </button>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-maximally-blue/5 to-maximally-red/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 animate-grid-flow" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <h1 className="font-press-start text-3xl md:text-4xl mb-6">
              Choose Your Circle_
            </h1>
            <p className="font-jetbrains text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Two communities. One mission. Build the future, globally.
            </p>
          </div>
        </div>
      </section>

      {/* Community Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Maximally Club */}
            <div className="pixel-border p-8 bg-gradient-to-br from-maximally-red/10 to-maximally-blue/10">
              <div className="inline-block bg-maximally-blue/20 px-4 py-2 rounded-full mb-6">
                <span className="font-jetbrains text-maximally-blue">
                  <Users className="h-4 w-4 inline-block mr-2" />
                  Open Community
                </span>
              </div>
              <h2 className="font-press-start text-2xl mb-4">Maximally Club_</h2>
              <p className="font-jetbrains mb-6">A place to learn, share, and grow together.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-maximally-red" />
                  <span>1000+ active builders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-maximally-blue" />
                  <span>Weekly workshops & sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-maximally-purple" />
                  <span>Networking & collaboration</span>
                </div>
              </div>
              <button
                onClick={() => window.location.href = 'https://discord.gg/S2YyGtBWKa'}
                className="pixel-button bg-maximally-red text-white inline-flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <MessagesSquare className="h-4 w-4" />
                Join Maximally Club
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-maximally-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-press-start text-2xl mb-12 text-center">Why Join Maximally?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2 border-maximally-blue/30 bg-black/50">
              <CardContent className="p-6">
                <h3 className="font-press-start text-lg mb-2 text-white">🚀 Real Projects</h3>
                <p className="font-jetbrains text-white">Build real products that solve real problems. No fake assignments.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-maximally-red/30 bg-black/50">
              <CardContent className="p-6">
                <h3 className="font-press-start text-lg mb-2 text-white">💡 Learn by Doing</h3>
                <p className="font-jetbrains text-white">Hands-on experience over theoretical knowledge. Pure execution.</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-maximally-purple/30 bg-black/50">
              <CardContent className="p-6">
                <h3 className="font-press-start text-lg mb-2 text-white">🌐 Network Growth</h3>
                <p className="font-jetbrains text-white">Connect with the world's most ambitious people and industry experts.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Community;