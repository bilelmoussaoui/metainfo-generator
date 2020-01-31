import React, { Component } from 'react'
import Highlight from 'react-highlight.js'
const MetaInfo = props => {
  const { project, type } = props
  const {
    id,
    name,
    summary,
    description,
    developerName,
    updateContact
  } = project
  const content = `​​<?xml version="1.0" encoding="UTF-8"?>
<component type='${type}'>
    <id>${id}</id>
    <launchable type="desktop-id">${id}.desktop</launchable>
    <name>${name}</name>
    <summary>${summary}</summary>
    <description>${description}</description>
    <developer_name>${developerName}</developer_name>
    <update_contact>${updateContact}</update_contact>
</component>`
  return (
    <div>
      <Highlight language='xml'>{content}</Highlight>
    </div>
  )
}

export default MetaInfo
