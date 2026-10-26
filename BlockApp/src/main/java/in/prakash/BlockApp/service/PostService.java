package in.prakash.BlockApp.service;

import in.prakash.BlockApp.model.Post;
import in.prakash.BlockApp.repository.PostRepositry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service

public class PostService {
   // @Autowired
    private PostRepositry postRepositry;
    public PostService(PostRepositry postRepositry){
        this.postRepositry=postRepositry;
    }
    public List<Post> getAll(){
        return postRepositry.findAll();
    }
    public  Post getById(Long id){
        return postRepositry.findById(id).orElseThrow();
    }

    public Post create(Post post){
        return postRepositry.save(post);
    }
    public void delete(Long id){
        postRepositry.deleteById(id);
    }

    public Post update(Long id,Post post){
        Post pre=postRepositry.findById(id).orElseThrow();
        pre.setTitle(post.getTitle());
        pre.setAuthor(post.getAuthor());
        pre.setContent(post.getContent());

        return postRepositry.save(pre);

    }






}
