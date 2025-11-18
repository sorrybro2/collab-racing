package racingcar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    // React Router를 위한 라우팅 처리
    // /api로 시작하지 않는 모든 경로는 index.html로 포워딩
    @GetMapping(value = {"/", "/classic/**", "/item/**"})
    public String home() {
        return "forward:/index.html";
    }
}
