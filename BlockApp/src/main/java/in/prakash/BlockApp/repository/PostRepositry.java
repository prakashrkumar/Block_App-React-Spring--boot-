package in.prakash.BlockApp.repository;

import in.prakash.BlockApp.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepositry extends JpaRepository<Post,Long> {
}
