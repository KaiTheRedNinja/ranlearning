'use client';

import Card from "../components/card";

export default function Home() {
  return (
    <div className="" style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 className="px-8 text-3xl font-bold mb-8">Card Component Demo</h1>
      
      {/* Single cards with various configurations */}
      <div className="px-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Full Featured Card</h2>
        <Card
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
          icon="https://api.dicebear.com/7.x/shapes/svg?seed=1"
          trailingIcon="https://api.dicebear.com/7.x/icons/svg?seed=arrow"
          title="Mountain Adventure"
          description="Discover breathtaking views and unforgettable experiences in the heart of nature. Join us for an incredible journey through stunning landscapes, where every moment brings new discoveries and lasting memories. This adventure will take you to places you've never imagined, with expert guides ensuring your safety and enjoyment throughout the entire trip."
          onClick={() => alert('Card clicked!')}
        />
      </div>

      <div className="px-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Minimal Card (Title Only)</h2>
        <Card
          title="Simple Design"
          showMore={false}
        />
      </div>

      <div className="px-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Card with Custom Colors</h2>
        <Card
          title="Custom Themed Card"
          icon="https://api.dicebear.com/7.x/shapes/svg?seed=2"
          description="This card demonstrates custom color options including background, title, body text, and see more link colors."
          backgroundColor="#1a1a2e"
          titleColor="#eee"
          bodyColor="#ccc"
          seeMoreColor="#16c79a"
        />
      </div>

      {/* Horizontal scroll view */}
      <div className="mb-8">
        <h2 className="px-8 text-2xl font-semibold mb-4">Horizontal Scroll View</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4 px-8 pb-4" style={{ width: 'max-content' }}>
            <div style={{ width: "400px", maxWidth: '66.666vw' }}>
              <Card
                image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop"
                icon="https://api.dicebear.com/7.x/shapes/svg?seed=3"
                title="Forest Exploration"
                description="Embark on a journey through ancient forests filled with towering trees and hidden wonders."
                backgroundColor="#f0f9ff"
                titleColor="#0c4a6e"
                bodyColor="#475569"
                onClick={() => alert('Forest card clicked!')}
              />
            </div>
            
            <div style={{ width: "400px", maxWidth: '66.666vw' }}>
              <Card
                image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop"
                trailingIcon="https://api.dicebear.com/7.x/icons/svg?seed=star"
                title="Beach Paradise"
                description="Experience the perfect getaway with crystal clear waters and golden sandy beaches that stretch as far as the eye can see."
                backgroundColor="#fffbeb"
                titleColor="#92400e"
                bodyColor="#78716c"
                seeMoreColor="#ea580c"
              />
            </div>
            
            <div style={{ width: "400px", maxWidth: '66.666vw' }}>
              <Card
                image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=400&fit=crop"
                icon="https://api.dicebear.com/7.x/shapes/svg?seed=4"
                trailingIcon="https://api.dicebear.com/7.x/icons/svg?seed=check"
                title="Desert Safari"
                description="Venture into vast desert landscapes where adventure awaits at every dune and sunset paints the sky in magnificent colors."
                backgroundColor="#fef2f2"
                titleColor="#7f1d1d"
                bodyColor="#57534e"
              />
            </div>
            
            <div style={{ width: "400px", maxWidth: '66.666vw' }}>
              <Card
                image="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop"
                icon="https://api.dicebear.com/7.x/shapes/svg?seed=5"
                title="Arctic Expedition"
                description="Journey to the far north where ice and snow create a pristine wilderness unlike anywhere else on Earth. Witness the northern lights dance across the sky."
                backgroundColor="#f0fdf4"
                titleColor="#14532d"
                bodyColor="#44403c"
                seeMoreColor="#15803d"
                onClick={() => alert('Arctic card clicked!')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Card Without Image</h2>
        <Card
          icon="https://api.dicebear.com/7.x/shapes/svg?seed=6"
          trailingIcon="https://api.dicebear.com/7.x/icons/svg?seed=info"
          title="Text-Only Content"
          description="This card demonstrates how the component looks without a header image, focusing entirely on the text content and icons."
          backgroundColor="#faf5ff"
          titleColor="#581c87"
          bodyColor="#6b7280"
          seeMoreColor="#7c3aed"
        />
      </div>
    </div>
  );
}
