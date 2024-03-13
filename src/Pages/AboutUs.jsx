import React from "react";
import Header from "../components/Header/Header";

function AboutUs() {
  return (
    <>
    <Header/>
    <div className="p-5">
      <div className="p-4 sticky top-[112px] text-3xl text-center shadow-lg shadow-indigo-300 font-bold bg-white rounded-full">
        <span>
          About Us
        </span>
      </div>

      <div className="p-10 flex flex-col gap-10">
        <div className="bg-white p-5 rounded-3xl shadow-lg">
          <div className="font-bold text-lg">MyLinkSet: Your All-in-One Bio Link</div>
          <div className="p-5">
            <p>MyLinkSet is a popular link-in-bio tool that allows you to
            consolidate all your important links into a single landing page.
            This page can then be shared in your bio section on various social
            media platforms, such as Instagram, TikTok, Twitch, Facebook,
            YouTube, and more. It acts as a central hub where your audience can
            easily find your website, social media profiles, other online
            content, and even contact information.</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-white p-5 rounded-3xl shadow-lg">
          <div className="font-bold text-lg">Key Features of MyLinkSet</div>
          <div className="flex flex-col p-5 gap-2">
            <span className="font-bold">Create a custom landing page:-</span>
            <p>You can personalize your MyLinkSet page with your own background
            image, color scheme, and fonts.</p>
            <span className="font-bold">Add multiple links:-</span>
            <p>Add multiple links: Include links to your website, social media
            profiles, other online platforms like YouTube channels, email
            sign-up forms, and more.</p>
            <span className="font-bold">Easy to use:-</span>
            <p>MyLinkSet offers a drag-and-drop interface to make adding and
            rearranging links effortless.</p>
            <span className="font-bold">Analytics:-</span>
            <p>Track how many people are clicking on your links and gain insights
            into your audience's engagement.</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-white p-5 rounded-3xl shadow-lg">
          <div className="font-bold text-lg">Benefits of Using MyLinkSet:-</div>
          <div className="flex flex-col p-5 gap-2">
            <span className="font-bold">Improved bio management:-</span>
            <p>Instead of having a single link in your bio, you can showcase all your important links with MyLinkSet.</p>
            <span className="font-bold">Increased engagement:-</span>
            <p>Make it easier for your audience to find and connect with you across various platforms.</p>
            <span className="font-bold">Professional appearance:-</span>
            <p>Create a consistent and professional online presence.</p>
            <span className="font-bold">Data-driven insights:-</span>
            <p>Understand how your audience interacts with your links and optimize your page accordingly.</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-white p-5 rounded-3xl shadow-lg">
          <div className="font-bold text-lg">Who can benefit from MyLinkSet?</div>
          <div className="flex flex-col p-5 gap-2">
            <span className="font-bold">Social media influencers:-</span>
            <p>Share links to your content and social media profiles.</p>
            <span className="font-bold">Businesses:-</span>
            <p>Promote your website, contact information, and online services.</p>
            <span className="font-bold">Artists and creators:-</span>
            <p>Showcase your portfolio and connect with your audience.</p>
            <span className="font-bold">Anyone with multiple online presences:-</span>
            <p>Consolidate your links into a single, shareable destination.</p>
          </div>
        </div>

        <div>
          <div className="font-bold text-xl bg-white p-5 rounded-3xl shadow-lg">Overall, MyLinkSet is a valuable tool for anyone who wants to easily share multiple links and engage with their audience online.</div>
        </div>

      </div>
    </div>
    </>
  );
}

export default AboutUs;
