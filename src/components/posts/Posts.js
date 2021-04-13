import React, {useEffect, useNavigate } from 'react'
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/tasksActions'
import SpinnerCustom from '../shared/SpinnerCustom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const Posts = (...props) => {


    const {allPosts} = props[0]

    useEffect(()=>{
        props[0].getAllPosts();      
    },[])

    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
      

      const classes = useStyles();

      const detailPost = (id) =>{
          console.log("OME", props[0].history.push)
        //props[0].history.push(`/posts/${id}`, detail={detail: id})
      } 
    
    return (
        <div>
           {! allPosts && <SpinnerCustom />}
           <div><h1>Tasks REDUX</h1></div>
               <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}> 
                   {
                   allPosts && allPosts.map((post)=>
                   <div style={{width: '30%', margin: '1%', minHeight: '20%', cursor:'pointer'}} key={post.id} onClick={()=>detailPost(post.id)}>
                       <Card className={classes.root}>
                   <CardContent>
                     <Typography variant="h5" component="h2">
                     {post.title}
                     </Typography>
                     <Typography variant="body2" component="p">
                       {post.body}
                     </Typography>
                   </CardContent>
                   <CardActions>
                   <Link className="btn btn-primary" to={{
      pathname: `/posts/${post.id}`,
      state: { detail: post }
    }}>
                    More Info
                </Link>
                   </CardActions>
                 </Card>
                   </div>)}
                   
               </div>
        </div>
    )
}

const mapStateToProps = state => ({
    allPosts: state.tasksReducer.allPosts
})

export default connect(mapStateToProps, { getAllPosts })(Posts)
