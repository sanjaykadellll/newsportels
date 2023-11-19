handleSeeMoreClick = () => {
    // Increase the number of articles to display when "See More" is clicked
    this.setState((prevState) => ({
        articlesToShow: prevState.articlesToShow + 5, // Display 5 more articles
    }));
}

handleSeeLessClick = () => {
    this.setState((prevState) => ({
      articlesToShow: Math.max(5, prevState.articlesToShow - 5), // Display at least 5 articles
    }));
  }

toggleContent = (index) => {
    const { articleData } = this.state.data.allArticles;
    articleData[index].expanded = !articleData[index].expanded;
    this.setState({ articleData });
}

