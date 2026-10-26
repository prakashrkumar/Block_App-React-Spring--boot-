package in.prakash.BlockApp.controller;

import in.prakash.BlockApp.model.Post;
import in.prakash.BlockApp.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private PostService postService;
    public PostController(PostService postService){
        this.postService=postService;
    }

     @GetMapping
    public List<Post>getAll(){
        return postService.getAll();
     }
     @GetMapping("{id}")
    public Post getOne(@PathVariable Long id){
        return postService.getById(id);
     }
     @PostMapping
    public Post create(@RequestBody  Post post){
        return postService.create(post);
     }
     @DeleteMapping("/{id}")
    public  void delete(@PathVariable Long id){
        postService.delete(id);
     }
    @PutMapping("/{id}")
    public Post update(@PathVariable Long id,@RequestBody Post post){
        return postService.update(id,post);
    }





}
