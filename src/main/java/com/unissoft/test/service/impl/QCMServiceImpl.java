package com.unissoft.test.service.impl;

import com.unissoft.test.mapper.inceptor2.QCMMapper;
import com.unissoft.test.service.QCMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class QCMServiceImpl implements QCMService {

    @Autowired
    private QCMMapper mapper;

    @Override
    public Map<String, Object> queryInfoByPlateId(String plateId) {
        Map<String, Object> map = mapper.queryInfoByPlateId(plateId);
        if (map != null) {
            String slabId = (String) map.get("slab_id");
            if (slabId != null && slabId != "") {
                String liuhao = mapper.queryStreamNumBySlabId(slabId);
                //System.out.println(liuhao);
                map.put("liuhao", liuhao);
            } else {
                map.put("liuhao", "wu");
            }
        } else {
            map = new HashMap<>();
            map.put("error", true);
        }
        return map;
    }

    @Override
    public Map<String, Object> getEchartsByHeatId(Map<String, String> map) {

        String arg = map.get("arg");
        String[] split = arg.split("_");
        String argNew = "";
        //获取字段信息
        for (int i = 1; i < split.length; i++) {
            argNew += split[i];
            argNew += "_";
        }
        argNew = argNew.substring(0, argNew.length() - 1);
        //System.out.println(argNew);
        String tableName = "";
        switch (split[0]) {
            case "bof":
                tableName = "QCM_BOF";
                break;
            case "lf":
                tableName = "QCM_LF";
                break;
            case "ccm":
                tableName = "QCM_CCM_HEATNO";
                break;
            default:
                tableName = "system.dual";
                break;
        }
        map.put("tableName", tableName);
        map.put("argNew", argNew);
        return mapper.getEchartsByHeatId(map);

    }

    @Override
    public Map<String, Object> getEchartsBySlabId(Map<String, String> map) {
        return mapper.getEchartsBySlabId(map);
    }

    @Override
    public Map<String, Object> getStreamBySlabId(Map<String, Object> map) {
        String slabId = (String) map.get("slabId");
        String liuhao = mapper.queryStreamNumBySlabId(slabId);
        map.put("liuhao", liuhao);
        return map;
    }

    @Override
    public Map<String, Object> getEchartsBySlabIdNoStream(Map<String, String> map) {
        String slabId = map.get("slabId");
        String liuhao = mapper.queryStreamNumBySlabId(slabId);
        map.put("liuhao", liuhao);
        return mapper.getEchartsBySlabId(map);
    }

    @Override
    public Map<String, Object> queryEchartsByPos(Map<String, String> map) {
        String pos = map.get("pos");
        String sub = pos.substring(pos.length() - 1, pos.length());
        map.put("sub", sub);
        if ("ccm1".equals(pos) || "ccm2".equals(pos)) {
            List<Map<String, Object>> list = mapper.queryInfoByCCM(map);
            return splitTime(map, list);
        } else if ("bof1".equals(pos) || "bof2".equals(pos)) {
            List<Map<String, Object>> list = mapper.queryInfoByBOF(map);
            return splitTime(map, list);
        } else if ("lf1".equals(pos) || "lf2".equals(pos) || "lf5".equals(pos)) {
            List<Map<String, Object>> list = mapper.queryInfoByLF(map);
            return splitTime(map, list);
        } else if ("rh1".equals(pos)) {

        }
        return null;
    }

    public Map<String, Object> splitTime(Map<String, String> map, List<Map<String, Object>> list) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        StringBuilder sBuffer1 = new StringBuilder();
        StringBuilder sBuffer2 = new StringBuilder();
        StringBuilder sBuffer3 = new StringBuilder();
        StringBuilder sBuffer4 = new StringBuilder();

        Map<String, Object> map1 = new HashMap<>();
        if (list.size() != 0) {
            for (Map<String, Object> map2 : list) {
                sBuffer1.append(map2.get("instime"));
                sBuffer1.append(",");
                sBuffer2.append(map2.get("newarg"));
                sBuffer2.append(",");
            }
            int start = 0;
            int end = 0;
            sBuffer1.deleteCharAt(sBuffer1.length() - 1);
            sBuffer2.deleteCharAt(sBuffer2.length() - 1);

            String[] s1 = sBuffer1.toString().split(",");
            String[] s2 = sBuffer2.toString().split(",");

            for (int i = 0; i < s1.length; i++) {
                try {
                    Date d1 = format.parse(s1[i]);
                    Date startDate = format.parse(map.get("dt1"));
                    if (!startDate.after(d1)) {
                        start = i;
                        break;
                    }
                } catch (ParseException e) {
                    e.printStackTrace();
                }
            }
            for (int i = s1.length - 1; i >= 0; i--) {
                try {
                    Date d1 = format.parse(s1[i]);
                    Date endDate = format.parse(map.get("dt2"));
                    if (!endDate.before(d1)) {
                        end = i;
                        break;
                    }
                } catch (ParseException e) {
                    e.printStackTrace();
                }
            }
            for (int i = start; i <= end; i++) {
                sBuffer3.append(s1[i]);
                sBuffer3.append(",");
                sBuffer4.append(s2[i]);
                sBuffer4.append(",");
            }
            sBuffer3.deleteCharAt(sBuffer3.length() - 1);
            sBuffer4.deleteCharAt(sBuffer4.length() - 1);

            map1.put("instime", sBuffer3);
            map1.put("newarg", sBuffer4);
//                System.out.println(map1);
            return map1;
        } else {
            map1.put("wu", true);
            return map1;
        }

    }
}
