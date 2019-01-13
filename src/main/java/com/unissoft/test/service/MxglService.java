package com.unissoft.test.service;

import com.github.pagehelper.PageInfo;
import com.unissoft.test.entity.TMxglModel;

public interface MxglService {
    public PageInfo<TMxglModel> list(int currentPage, int pageSize);
}
