/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from './actions';
import React from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';
import Button from 'Button';
import A from 'A';
import H1 from 'H1';
import H2 from 'H2';

import styles from './styles.css';

class HomePage extends React.Component {
  constructor() {
    super();
    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeOwnerName = this.onChangeOwnerName.bind(this);
    this.onChangeRoute = this.onChangeRoute.bind(this);
    this.changeRouteToReadme = this.changeRouteToReadme.bind(this);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  onChangeOwnerName(evt) {
    this.props.changeOwnerName(evt.target.value);
  }

  onChangeProjectName(evt) {
    this.props.changeProjectName(evt.target.value);
  }

  onChangeRoute(url) {
    this.props.changeRoute(url);
  }

  changeRouteToReadme() {
    this.onChangeRoute('/readme');
  }

  render() {
    return (
      <article>
        <div>
          <section className={ styles.textSection }>
            <H1>React Boilerplate</H1>
            <p>Quick setup for new performance orientated, offline–first React.js applications featuring Redux, hot–reloading, PostCSS, react-router, ServiceWorker, AppCache, FontFaceObserver and Mocha.</p>
          </section>
          <section className={ styles.textSection }>
            <H2>Features</H2>
            <ul className={ styles.list }>
              <li className={ styles.listItem }>
                <p>Using <A href="https://github.com/gaearon/react-transform-hmr"><strong>react-transform-hmr</strong></A>, your changes in the CSS and JS get reflected in the app instantly without refreshing the page. That means that the <strong>current application state persists</strong> even when you change something in the underlying code! For a very good explanation and demo watch Dan Abramov himself <A href="https://www.youtube.com/watch?v=xsSnOQynTHs">talking about it at react-europe</A>.</p>
              </li>
              <li className={ styles.listItem }>
                <p><A href="https://github.com/gaearon/redux"><strong>Redux</strong></A> is a much better implementation of a flux–like, unidirectional data flow. Redux makes actions composable, reduces the boilerplate code and makes hot–reloading possible in the first place. For a good overview of redux check out the talk linked above or the <A href="https://gaearon.github.io/redux/">official documentation</A>!</p>
              </li>
              <li className={ styles.listItem }>
                <p><A href="https://github.com/postcss/postcss"><strong>PostCSS</strong></A> is like Sass, but modular and capable of much more. PostCSS is, in essence, just a wrapper for plugins which exposes an easy to use, but very powerful API. While it is possible to <A href="https://github.com/jonathantneal/precss">replicate Sass features</A> with PostCSS, PostCSS has an <A href="http://postcss.parts">ecosystem of amazing plugins</A> with functionalities Sass cannot even dream about having.</p>
              </li>
              <li className={ styles.listItem }>
                <p><strong>Unit tests</strong> should be an important part of every web application developers toolchain. <A href="https://github.com/mochajs/mocha">Mocha</A> checks your application is working exactly how it should without you lifting a single finger. Congratulations, you just won a First Class ticket to world domaination, fasten your seat belt please!</p>
              </li>
              <li className={ styles.listItem }>
                <p><A href="https://github.com/rackt/react-router"><strong>react-router</strong></A> is used for routing in this boilerplate. react-router makes routing really easy to do and takes care of a lot of the work.</p>
              </li>
              <li className={ styles.listItem }>
                <p><A href="http://www.html5rocks.com/en/tutorials/service-worker/introduction/"><strong>ServiceWorker</strong></A> and <A href="http://www.html5rocks.com/en/tutorials/appcache/beginner/"><strong>AppCache</strong></A> make it possible to use the application offline. As soon as the website has been opened once, it is cached and available without a network connection. <A href="https://developer.chrome.com/multidevice/android/installtohomescreen"><strong><code className={ styles.code }>manifest.json</code></strong></A> is specifically for Chrome on Android. Users can add the website to the homescreen and use it like a native app!</p>
              </li>
            </ul>
          </section>
          <Button handleRoute = { this.changeRouteToReadme }>Setup</Button>
        </div>
      </article>
    );
  }
}

// react-redux stuff
function mapStateToProps(state) {
  return {
    projectName: state.get('home').get('projectName'),
    ownerName: state.get('home').get('ownerName')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(routeActions.push(url)),
    changeProjectName: (value) => dispatch(asyncChangeProjectName(value)),
    changeOwnerName: (value) => dispatch(asyncChangeOwnerName(value))
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);