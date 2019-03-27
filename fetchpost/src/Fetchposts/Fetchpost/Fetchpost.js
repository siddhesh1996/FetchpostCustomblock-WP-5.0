import React, { Component } from 'react';

class Fetchpost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            value: ''
        }
    }

    componentDidMount() {
        const apiurl = this.props.url;
        fetch(apiurl,{mode: 'cors'})
        .then(response => response.json())
        .then(posts => this.setState({ posts: posts}))
        .catch(error => log('Request failed',error))
    }

    render() {
        const selectposts = this.state.posts && this.state.posts.map(post => {
            return (
                <option 
                    value={post.title.rendered} 
                    key={post.id}
                    >{post.title.rendered}
                </option>
            );
        });
        // const getSelected = () => {
        //     let selector = document.querySelector('select');
        //     let value = selector[selector.selectedIndex].value;
        //     return showSelected(value)
        // }
        // const showSelected = (value) => {
        //     this.setState({ value: value });
        //     if(this.state.value == value) {
        //         return(
        //             <div>
        //                 <p>
        //                     {value}
        //                 </p>
        //             </div>
        //         )
        //     }
        // }
        return (
            <div>
                <select>
                    {selectposts}
                </select>
            </div>
        )
    }
}

export default Fetchpost;