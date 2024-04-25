import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Link,
  Divider,
} from '@mui/material';

function GroupResultsBySection({ results }) {
  const searchPerformed = results && results.length > 0;

  const groupResultsBySection = () => {
    const groupedResults = {};

    if (searchPerformed) {
      results.forEach((article) => {
        if (!groupedResults[article.sectionId]) {
          groupedResults[article.sectionId] = {
            sectionName: article.sectionName,
            articles: [],
          };
        }
        groupedResults[article.sectionId].articles.push(article);
      });
    }

    return groupedResults;
  };

  const groupedResults = groupResultsBySection();

  return (
    <div>
      {searchPerformed ? (
        <div>
          {Object.keys(groupedResults).map((sectionId) => (
            <div key={sectionId}>
              <Typography variant='h6' gutterBottom>
                Section: {groupedResults[sectionId].sectionName}
              </Typography>
              <List>
                {groupedResults[sectionId].articles.map((article) => (
                  <ListItem key={article.id}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <ListItemText
                        primary={article.title}
                        secondary={`Publication Date: ${new Date(
                          article.publicationDate
                        ).toLocaleDateString('en-GB')}`}
                      />

                      <div style={{ marginTop: '5px' }}>
                        <Link
                          href={article.url}
                          target='_blank'
                          rel='noopener noreferrer'>
                          Read Article
                        </Link>
                      </div>
                    </div>
                  </ListItem>
                ))}
                <Divider component='li' />
              </List>
            </div>
          ))}
        </div>
      ) : (
        searchPerformed && (
          <Typography variant='body2'>No results found!</Typography>
        )
      )}
    </div>
  );
}

GroupResultsBySection.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      publicationDate: PropTypes.string.isRequired,
      sectionId: PropTypes.string.isRequired,
      sectionName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GroupResultsBySection;
