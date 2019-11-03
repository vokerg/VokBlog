package com.vokerg.blog.VokergBlog.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AlertEnvelope {
    Integer unseenCount;
    List<Alert> alertList;
}
