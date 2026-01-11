export default {
  name: 'university',
  title: 'University',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'University Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'applicationLink',
      title: 'Application Link',
      type: 'url',
      description: 'Full URL starting with https://',
      validation: Rule =>
        Rule.required().uri({
          allowRelative: false,
          scheme: ['http', 'https']
        })
    },
    {
      name: 'deadline',
      title: 'Application Deadline',
      type: 'date'
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
      description: 'Optional extra info (e.g. online applications open)'
    }
  ]
}

