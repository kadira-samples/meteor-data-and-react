import { composeWithTracker } from 'react-komposer';
import PostPage from '../components/post_page.jsx';
import { DocHead } from 'meteor/kadira:dochead';

function composer(props, onData) {
  const handle = Meteor.subscribe('singlePost', props._id);

  if(handle.ready()) {
    const post = Posts.findOne({_id: props._id});
    onData(null, {post});

    // Make our blog posts SEO friendly
    DocHead.setTitle(post.title);
    DocHead.addMeta({
      name: 'description', content: post.content.substr(0, 20)
    });
  }
};

export default composeWithTracker(composer)(PostPage);
