import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import React from 'react'
import { Typography } from '@material-ui/core'

const ContentCard = ({ content, className, component='h3' }) => (
  <Card className={className}>
    <CardContent>
      <Typography variant="h5" component={component}>{content.title}</Typography>
      <div
        dangerouslySetInnerHTML={{
          __html: content.description.childMarkdownRemark.html,
        }}
      />
    </CardContent>
    {content.linkText && (
      <CardActions>
        <Button href={content.linkUrl} size="small" color="secondary">
          {content.linkText}
        </Button>
      </CardActions>
    )}
  </Card>
)

export default ContentCard
