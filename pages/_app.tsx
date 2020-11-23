import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import "../components/app.scss";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="h-screen">
        <Head>
          <title>Website</title>
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}
