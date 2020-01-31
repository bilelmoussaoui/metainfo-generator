import React from 'react'
import Highlight from 'react-highlight.js'
import { projectToManifest } from './../../utils'

const MetaCode = props => {
  const content = projectToManifest(props.project)
  return (
    <div>
      <Highlight language='xml'>{content}</Highlight>
    </div>
  )
}

export default MetaCode
