package com.rafeed.task_manager.repository;
import com.rafeed.task_manager.model.Task;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public class TaskRepository {
    private Map<Long, Task> tasks = new HashMap<>();
    private Long nextId = 1L;

    public List<Task> findAll() {
        return new ArrayList<>(tasks.values());
    }

    public Task save(Task task) {
        if (task.getId() == null) {
            task.setId(nextId++);
        }
        tasks.put(task.getId(), task);
        return task;
    }

    public Optional<Task> findById(Long id) {
        return Optional.ofNullable(tasks.get(id));
 
        
    }

    public void deleteById(Long id) {
        tasks.remove(id);
    }
}
