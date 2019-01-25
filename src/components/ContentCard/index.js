import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const ContentCard = ({ content, className }) => (
  <Card className={className}>
    <CardContent>
      <Typography variant="headline">{content.title}</Typography>
      <div
        dangerouslySetInnerHTML={{
          __html: content.description.childMarkdownRemark.html,
        }}
      />
    </CardContent>
    <CardActions>
      <Button href={content.linkUrl} size="small" color="secondary">
        {content.linkText}
      </Button>
    </CardActions>
  </Card>
)

export default ContentCard
