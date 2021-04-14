import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SpinnerCustom from "../shared/SpinnerCustom";
import { commentsPost, saveComment } from "../../actions/tasksActions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const DetailPosts = (...props) => {
    const idPost = props[0].match.params.id;
    const detailPost = (props[0].location.state || {}).detail;

    const [datos, setDatos] = useState({
        name: "",
        body: "",
        email: "",
    });

    const { arrayCommentsPosts } = props[0] || [];

    useEffect(() => {
        props[0].commentsPost(idPost);
    }, []);

    const onInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
        });
    };

    const createComment = (event) => {
        event.preventDefault();

        const newComment = {
            body: datos.body,
            email: datos.email,
            name: datos.name,
            postId: parseInt(idPost),
            id: Math.floor(Math.random() * 100),
        };

        try {
            props[0].saveComment(newComment);
        } catch (error) {
            console.log("ERROR", error);
        }
    };

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            backgroundColor: "rgb(124 45 150 / 18%)",
            borderRadius: '9%'
        },
        bullet: {
            display: "inline-block",
            margin: "0 2px",
            transform: "scale(0.8)",
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();

    return (
        <div>
            {!arrayCommentsPosts && <SpinnerCustom />}
            <h1>Detail Post</h1>
            <hr></hr>
            <div>
                <h1>{detailPost.title}</h1>
                <p>{detailPost.body}</p>
            </div>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {arrayCommentsPosts &&
                    arrayCommentsPosts.map((comment) => (
                        <div
                            key={comment.id}
                            style={{
                                width: "30%",
                                margin: "1%",
                            }}
                        >
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {comment.name}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {comment.body}
                                    </Typography>
                                    <Typography variant="body1" component="p">
                                        {comment.email}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
            </div>
            <h1>Comment post</h1>
            <hr></hr>
            <div>
                <div className="card card-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Name"
                            onChange={onInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Body</label>
                        <input
                            type="text"
                            className="form-control"
                            name="body"
                            placeholder="Body "
                            onChange={onInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            onChange={onInputChange}
                            required
                        />
                    </div>
                </div>
            </div>
            <form onSubmit={createComment}>
                <button type="submit" className="btn btn-success">
                    Save
                </button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    arrayCommentsPosts: state.tasksReducer.arrayCommentsPosts,
});

export default connect(mapStateToProps, { commentsPost, saveComment })(
    DetailPosts
);
