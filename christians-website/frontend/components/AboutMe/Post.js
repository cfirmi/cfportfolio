import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const PostStyle = styled.div`
  /* background: blue; */
  height: 100%;
  width: 100%;
  color: ${props => props.theme.offWhite};
  margin-top: 50px;
  img {
    border-radius: 2px;
    width: 60vw;
    max-width: 700px;
    margin-left: 50%;
    transform: translateX(-50%);
    @media (max-width:1000px) {
      width: 90%;
    };
    @media (max-width: 600px) {
    width: 100%;
    margin-left: 0%;
    transform: translateX(0%);
    };
  }
`;

export default class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const { post } = this.props;
    return (
      <PostStyle>
        <h1>
        {post.image && <img src={post.image} alt={post.title} />}
        <br/>
        <Link
            href={{
              pathname: '/post',
              query: { id: post.id },
            }}
          >
            <a>{post.title}</a>
          </Link>
        </h1>
        <p>{post.desc}</p>
      </PostStyle>
    )
  }
}