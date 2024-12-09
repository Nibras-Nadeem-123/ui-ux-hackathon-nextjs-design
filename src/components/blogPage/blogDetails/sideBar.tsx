import React from 'react';
import PopularTags from './popularTags';
import PhotoGallery from './photoGallery';
import SocialFollow from './socialFollow';
import ProfileCard from './profileCard';
import RecentPosts from './recentPost';
import FilterByMenu from './filterByMenu';

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-1/3">
      <ProfileCard />
      <RecentPosts />
      <FilterByMenu />
      <PopularTags />
      <PhotoGallery />
      <SocialFollow />
    </aside>
  );
};

export default Sidebar; 