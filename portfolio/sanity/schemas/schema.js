// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import pageInfo from './pageInfo'
import experience from './experience'
import skill from './skill'
import social from './social'
import project from './project'

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([pageInfo, experience, skill, social, project]),
})
