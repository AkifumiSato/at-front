/** @jsx jsx */
import * as React from 'react'
import { jsx } from '@emotion/core'
import url from '../../config/url'
import Layout from '../organisms/Layout'

const List: React.FC = () => (
  <Layout prev={url.dashboard.root}>list page</Layout>
)

export default List
