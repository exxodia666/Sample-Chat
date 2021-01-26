import { SEND_REQ_SUCCESS, SEND_REQ_REJECTED } from './../../actions/auth/auth_action_types';
//   const initialState: ChatState = {
//     messages: []
//   }
  

/** 
 * {
 *  "avatar_url": "https://avatars.githubusercontent.com/u/2216?v=4", 
 *  "bio": null, 
 *  "blog": "", 
 *  "company": null, 
 *  "created_at": "2008-03-04T21:41:39Z", 
 *  "email": null, 
 *  "events_url": "https://api.github.com/users/spike/events{/privacy}", 
 *  "followers": 9, 
 *  "followers_url": "https://api.github.com/users/spike/followers", 
 *  "following": 14, "following_url": "https://api.github.com/users/spike/following{/other_user}", 
 *  "gists_url": "https://api.github.com/users/spike/gists{/gist_id}", "gravatar_id": "", 
 *  "hireable": null, 
 *  "html_url": "https://github.com/spike", "id": 2216, 
 *  "location": "Alameda, CA", 
 *  "login": "spike", 
 *  "name": "Stephan", 
 *  "node_id": "MDQ6VXNlcjIyMTY=", 
 *  "organizations_url": "https://api.github.com/users/spike/orgs", 
 *  "public_gists": 0, 
 *  "public_repos": 23, 
 *  "received_events_url": "https://api.github.com/users/spike/received_events", 
 *  "repos_url": "https://api.github.com/users/spike/repos", "site_admin": false, 
 *  "starred_url": "https://api.github.com/users/spike/starred{/owner}{/repo}", 
 *  "subscriptions_url": "https://api.github.com/users/spike/subscriptions", 
 *  "twitter_username": null, 
 *  "type": "User", 
 *  "updated_at": "2020-12-14T12:02:25Z", 
 *  "url": "https://api.github.com/users/spike"}
*/

const initialState = {
    status: 'idle',
    data: {} 
}
const auth_reducer = (state: any = {}, action: any) => {
    console.log(action)
    switch (action.type) {
        case SEND_REQ_SUCCESS: 
            return {
                status: 'completed',
                data: {...action.payload}
            }
            case SEND_REQ_REJECTED:
                console.log(action)
                return {...state}
        default:
            return state
    }
}

  export default auth_reducer