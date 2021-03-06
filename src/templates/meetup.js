import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/meetup.scss';

import HeadshotPlaceholder from '../img/headshot-placeholder.svg';

class MeetupTemplate extends Component {
  render() {
    return (
      <section
        className={`meetup  ${this.props.className && this.props.className}`}
        key={this.props.meetup.rawDate}
      >
        <a
          href={this.props.meetup.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="meetup-title">{this.props.meetup.title}</h2>
        </a>
        <div className="meetup-meta">
          <p className="meetup-metaField  meetup-metaField--date">
            <span className="meetup-label">Date :</span>{' '}
            {this.props.meetup.formattedDate}
          </p>
          <p className="meetup-metaField  meetup-metaField--location">
            <span className="meetup-label">Lieu :</span>{' '}
            <a
              href={this.props.meetup.location.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.meetup.location.name}
            </a>
          </p>
        </div>
        {this.props.meetup.sponsors.length > 0 && (
          <div className="meetup-sponsors">
            {this.props.meetup.sponsors.map(sponsor => (
              <div className="meetup-sponsor" key={sponsor.name}>
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                  <img
                    className="meetup-sponsorImage"
                    src={sponsor.image ? sponsor.image : HeadshotPlaceholder}
                    alt={
                      sponsor.image
                        ? sponsor.name
                        : 'Default headshot placeholder'
                    }
                  />
                </a>
              </div>
            ))}
          </div>
        )}
        <div className="meetup-presenters">
          {this.props.meetup.presenters.map(presenter => (
            <div className="meetup-presenter" key={presenter.name}>
              <div className="meetup-presenterImageContainer">
                <img
                  className="meetup-presenterImage"
                  src={presenter.image ? presenter.image : HeadshotPlaceholder}
                  alt={
                    presenter.image
                      ? presenter.name
                      : 'Default headshot placeholder'
                  }
                />
                <span className="meetup-presenterName">{presenter.name}</span>
              </div>
              <div className="meetup-presenterInfo">
                {presenter.presentationTitle && (
                  <h3 className="meetup-presenterTitle">
                    {presenter.presentationTitle}
                  </h3>
                )}
                <p className="meetup-presenterText">{presenter.text}</p>
                <ul className="meetup-presenterLinks">
                  {presenter.links &&
                    presenter.links.map((link, index) => (
                      <li key={index} className="meetup-presenterLinkItem">
                        <a
                          className="meetup-presenterLink"
                          href={link.linkURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.linkText}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

MeetupTemplate.propTypes = {
  meetup: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    presenters: PropTypes.array,
    sponsors: PropTypes.array
  })
};

export default MeetupTemplate;
