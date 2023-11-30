handleSeeMoreClick = () => {
  const { articlesToShow, articleData } = this.state;
  const nextPage = Math.min(articlesToShow + 5, articleData.length);
  
  this.setState({
      articlesToShow: nextPage,
  });
}

handleSeeLessClick = () => {
  this.setState((prevState) => ({
      articlesToShow: Math.max(5, prevState.articlesToShow - 5),
  }));
}

toggleContent = (index) => {
    const { articleData } = this.state.data.allArticles;
    articleData[index].expanded = !articleData[index].expanded;
    this.setState({ articleData });
}

