package com.unissoft.test.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.unissoft.test.controller.MZBean;
import com.unissoft.test.entity.CPKModel;
import com.unissoft.test.mapper.inceptor2.CPKMZMapper;
import com.unissoft.test.mapper.mysql.CPKMapper;
import com.unissoft.test.service.CPKService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.BadBinaryOpValueExpException;
import java.util.List;
import java.util.Map;

@Service
public class CPKServiceImpl implements CPKService {

    @Autowired
    private CPKMapper mapper;
    @Autowired
    private CPKMZMapper mzMapper;
    @Autowired
    private MZBean bean;

    @Override
    public PageInfo<CPKModel> list(int currentPage, int pageSize, CPKModel model) {
        PageHelper.startPage(currentPage, pageSize);
        List<CPKModel> list = mapper.selectList(model);
        for (CPKModel cpkModel : list) {
            String pos = cpkModel.getPos();
            String gz = cpkModel.getStlGrdName();
            String bb = cpkModel.getShiftId();
            String cpkItem = cpkModel.getItemCd();

//            String newPos = mzMapper.selectPos(pos);
//            String newGZ = mzMapper.selectGZ(gz);
//            String newBB = mzMapper.selectBB(bb);
            String newPos = (String) bean.posMaps.get(pos);
            String newGZ = (String) bean.gzMaps.get(gz);
            String newBB = (String) bean.bbMaps.get(bb);
            String newCPKItem = (String) bean.cpkMaps.get(cpkItem);
            cpkModel.setPos(newPos);
            cpkModel.setStlGrdName(newGZ);
            cpkModel.setShiftId(newBB);
            cpkModel.setItemCd(newCPKItem);
        }

        PageInfo<CPKModel> info = new PageInfo<>(list, 5);
        return info;
    }

    /**
     * 根据时间找cpk的第一个echarts图
     *
     * @param model
     * @return
     */
    @Override
    public List<Map<String, Object>> showEchartsOneByTime(CPKModel model) {
        return mapper.showEchartsOneByTime(model);
    }

    @Override
    public List<Map<String, Object>> showEchartsTwoByTime(CPKModel model) {
        List<Map<String, Object>> maps = mapper.showEchartsTwoByTime(model);
        for (Map<String, Object> map :
                maps) {
            String pos = (String) map.get("pos");
            System.out.println(pos);
            //String newPos = mzMapper.selectPos(pos);
            String newPos = (String) bean.posMaps.get(pos);
            map.put("newPos", newPos);
        }
        return maps;
    }

    @Override
    public List<Map<String, Object>> showEchartsThreeByTime(CPKModel model) {
        List<Map<String, Object>> maps = mapper.showEchartsThreeByTime(model);
        for (Map<String, Object> map :
                maps) {
            String itemCd = (String) map.get("item_cd");
//            System.out.println(bean.cpkMaps);
            System.out.println(itemCd);
            //String newItemCd = mzMapper.selectCPKItem(itemCd);
            String newItemCd = (String) bean.cpkMaps.get(itemCd);
            map.put("item_cd", newItemCd);
        }
        return maps;
    }

    @Override
    public List<Map<String, Object>> showEchartsOneByPos(CPKModel model) {
        List<Map<String, Object>> maps = mapper.showEchartsOneByPos(model);
        for (Map<String, Object> map :
                maps) {
            String pos = (String) map.get("pos");
            System.out.println(pos + 1);
//            String newPos = mzMapper.selectPos(pos);
            String newPos = (String) bean.posMaps.get(pos);
            map.put("newPos", newPos);

        }
        return maps;
    }

    @Override
    public List<Map<String, Object>> showEchartsTwoByPos(CPKModel model) {
        List<Map<String, Object>> maps = mapper.showEchartsTwoByPos(model);
        for (Map<String, Object> map :
                maps) {
            String shiftId = (String) map.get("shift_id");
            System.out.println(shiftId + 1);
//            String newShiftId = mzMapper.selectBB(shiftId);
            String newShiftId = (String) bean.bbMaps.get(shiftId);
            map.put("new_shift_id", newShiftId);

        }

        return maps;
    }

    @Override
    public List<Map<String, Object>> showEchartsThreeByPos(CPKModel model) {
        List<Map<String, Object>> maps = mapper.showEchartsThreeByPos(model);
        for (Map<String, Object> map :
                maps) {
            String itemCd = (String) map.get("item_cd");
            System.out.println(itemCd + 1);
//            String newItemCd = mzMapper.selectCPKItem(itemCd);
            String newItemCd = (String) bean.cpkMaps.get(itemCd);
            map.put("item_cd", newItemCd);


        }
        return maps;
    }

    @Override
    public List<Map<String, Object>> showEchartsBZByPos(CPKModel model) {
        return mapper.showEchartsBZByPos(model);
    }

    @Override
    public PageInfo<Map<String, Object>> searchGroupByItem_cd(int currentPage, int pageSize, CPKModel model) {
        //return mapper.searchGroupByItem_cd(model);
        PageHelper.startPage(currentPage, pageSize);
        List<Map<String, Object>> list = mapper.searchGroupByItem_cd(model);
        PageInfo<Map<String, Object>> info = new PageInfo<>(list, 5);
        return info;
    }

}
