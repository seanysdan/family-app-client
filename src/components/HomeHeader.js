import { gql, graphql, useQuery } from "@apollo/client";
import React from "react";
import Header from "../components/Header";
import { ME } from "../queries";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import EventIcon from "@material-ui/icons/Event";
import HomeIcon from "@material-ui/icons/Home";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";

import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";
import logo from "../img/logo2-white.png";
import me from "../img/seandan.jpg";

const HomeHeader = () => {
  return (
    <header class="home-header">
      <img src={logo} alt="logo" class="home-logo" />
      <form action="#" class="search">
        <input type="text" class="search__input" placeholder="Search..." />
        <button class="search__button">
          <SearchIcon class="search__icon" />
        </button>
      </form>
      <nav class="user-nav">
        <div class="user-nav__icon-box">
          <ChatBubbleIcon class="user-nav__icon" />
          <span class="user-nav__notification">13</span>
        </div>
        <div class="user-nav__user">
          <a href="/profile">
            <img src={me} class="user-nav__user-photo" alt="User Photo" />
            <span class="user-nav__user-name">Sean</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HomeHeader;
