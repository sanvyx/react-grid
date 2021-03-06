import React from "react";

import { storiesOf } from "@storybook/react";
import Layout from "../components/Layout";
import Content from "../components/Content";

import { Grid, Col } from "../../src/";

import code from "./code-example";
import "../index.css";

storiesOf("Grid", module).add("Justify content center", () => (
  <Layout title="Justify content center" code={code}>
    <Grid gaps="1em" justifyContent="center">
      <Col xs={2}>
        <Content>One</Content>
      </Col>
      <Col xs={2}>
        <Content>Two</Content>
      </Col>
      <Col xs={2}>
        <Content>Three</Content>
      </Col>
    </Grid>
  </Layout>
));
