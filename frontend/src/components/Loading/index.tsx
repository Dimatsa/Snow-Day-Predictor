import { TFunction } from "i18next"

import { GlobalState } from "../../types/types"

import React from "react"
import { connect } from "react-redux"

type ConnectedLoading = {
  t: TFunction
}

const mapStateToProps = (props: GlobalState) => ({
  t: props.i18nReducer.t,
})

export default connect(mapStateToProps)(({ t }: ConnectedLoading) => (
  <>
    <p>Loading...</p>
  </>
))