<template>
    <div>
        <h4>Give Comments or Suggestions</h4>
        <form>
            <textarea v-bind:maxlength="commentSize" cols="50" rows="10" v-model="comment.cy_comment"></textarea>
            <br>
            <button @click="addToComments()" type="button" >COMMENT</button>
        </form>
        <br>
        <p>{{msg}}</p>
        <br>
        <div>
            <p><u>Previous comments</u></p>
            <ul>
                <li  class="shops" v-for="(index,comment) in comments">{{ comment.cy_comment }}
                </li>
                <!--<br style="width:10px;"/>-->
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comments",
        data:()=>{
            return{
                cy_comment: '',
                comment:{},
                msg:"",
                comments: [
                    {cy_comment: "Had a great lunch thanks"},
                ],
                commentSize: 30
            }
        },
        methods:{
            addToComments() {
                this.comments.push(this.comment);
                this.comment = {};
                console.log(this.comments.length)
            },

        },
        watch:{
            'comment.cy_comment':function (newValue) {
                if (newValue.length){
                    if (newValue.length == this.commentSize) {
                        this.msg = " Now Send"
                    }
                    else {
                        this.msg = "typing . . ."
                    }
                }
            }
        }
    }
</script>

<style scoped>
ul li{
    text-decoration: none;
    list-style: none;
}
</style>