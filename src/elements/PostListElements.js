// Styles for our post list, setting up the subgrid.

import styled from "styled-components"

export const PostListWrapper = styled.main`

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${props => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }

`
