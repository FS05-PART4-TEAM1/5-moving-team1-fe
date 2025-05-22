import { Box, Button, Typography } from "@mui/material";
import { ChipCategory, ChipProps } from "../chip/ChipCategory";
import Image from "next/image";
import { COLORS } from "@/public/theme/colors";

export interface CardData {
  types: ChipProps["type"][];
  message?: string;
  imgSrc: string;
  name: string;
  like: number;
  rating: number;
  count: number;
  career: number;
  confirm: number;
  isLiked: boolean;
  cost?: number;
  date?: number;
  from?: string;
  to?: string;
  ReviewCheck?: boolean;
  review?: number;
  writeReview?: string;
}
interface CardProps {
  data: CardData;
  onConfirmClick?: () => void;
  onDetailClick?: () => void;
}

export const CardListRequest = ({
  data,
  onConfirmClick,
  onDetailClick,
}: CardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border="0.5px solid #F2F2F2"
      width={[327, 600, 688]}
      height={[398, 362, 410]}
      bgcolor="#FFFFFF"
      borderRadius="16px"
      padding={[
        "20px 12px 14px 12px",
        "22px 12px 16px 12px",
        "28px 24px 22px 24px",
      ]}
      boxShadow="2px 2px 10px 0px #DCDCDC24, -2px -2px 10px 0px #DCDCDC24"
      boxSizing={"border-box"}
    >
      <Box>
        <Box display="flex" flexDirection="row" gap={["8px", "12px"]}>
          {data.types.map((type, index) => (
            <ChipCategory key={index} type={type} />
          ))}
        </Box>
        <Typography>{data.date}시간 전</Typography>
      </Box>

      <Box
        display="flex"
        border="1px solid #F2F2F2"
        bgcolor="#FFFFFF"
        padding={["16px", "10px", "16px 10px"]}
        boxShadow="4px 4px 16px 0px #E9E9E91A"
        gap={["12px", "12px", "24px"]}
        borderRadius={"6px"}
      >
        <Box display="flex" flexDirection="column" flexGrow={1}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontSize: [14, 14, 18],
                lineHeight: ["24px", "24px", "26px"],
                fontWeight: 600,
                color: COLORS.Black[300],
              }}
            >
              {data.name} 고객님
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            gap={"9.5px"}
            alignItems="center"
            flexGrow={1}
            justifyContent={["space-between", "flex-start"]}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Image
                src="/images/star/star_active.svg"
                alt="별점 사진"
                width={20}
                height={20}
              />
              <Typography
                sx={{
                  fontSize: [13, 13, 16],
                  lineHeight: ["22px", "22px", "26px"],
                  fontWeight: 500,
                  color: COLORS.Black[300],
                }}
              >
                {data.rating}
              </Typography>
              <Typography
                sx={{
                  fontSize: [13, 13, 16],
                  lineHeight: ["22px", "22px", "26px"],
                  fontWeight: 500,
                  color: COLORS.Grayscale[300],
                }}
              >
                ({data.count})
              </Typography>
            </Box>
            <Box height={14} border={"1px solid #E6E6E6"}></Box>
            <Box display="flex">
              <Typography
                sx={{
                  fontSize: [13, 13, 16],
                  lineHeight: ["22px", "22px", "26px"],
                  fontWeight: 500,
                  color: COLORS.Grayscale[300],
                }}
              >
                경력
              </Typography>
              <Typography
                sx={{
                  fontSize: [13, 13, 16],
                  lineHeight: ["22px", "22px", "26px"],
                  fontWeight: 500,
                  color: COLORS.Black[300],
                }}
              >
                {data.career}년
              </Typography>
            </Box>
            <Box height={14} border={"1px solid #E6E6E6"}></Box>
            <Box display="flex">
              <Typography
                sx={{
                  fontSize: [13, 13, 16],
                  lineHeight: ["22px", "22px", "26px"],
                  fontWeight: 500,
                  color: COLORS.Black[300],
                }}
              >
                {data.confirm}
              </Typography>
              <Typography
                sx={{
                  fontSize: [13, 13, 16],
                  lineHeight: ["22px", "22px", "26px"],
                  fontWeight: 500,
                  color: COLORS.Grayscale[300],
                }}
              >
                확정
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={["8px", "16px", "24px"]}
      >
        <Box
          display={"flex"}
          flexDirection={["column", "row", "row"]}
          gap={["14px", "14px", "24px"]}
        >
          <Box display={"flex"} gap={["8px", "8px", "12px"]}>
            <Box
              bgcolor="#F4F7FB"
              borderRadius="4px"
              display={"inline-block"}
              padding={["2px 6px", "2px 6px", "4px 6px"]}
            >
              <Typography
                sx={{
                  fontSize: [14, 14, 18],
                  lineHeight: ["24px", "24px", "26px"],
                  fontWeight: [500, 500, 400],
                  color: COLORS.Grayscale[400],
                }}
              >
                이사일
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: [14, 14, 18],
                lineHeight: ["24px", "24px", "26px"],
                fontWeight: 500,
                color: COLORS.Black[300],
              }}
            >
              {data.date}
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Box display={"flex"} gap={["8px", "8px", "12px"]}>
              <Box
                bgcolor="#F4F7FB"
                borderRadius="4px"
                display={"inline-block"}
                padding={["2px 6px", "2px 6px", "4px 6px"]}
              >
                <Typography
                  sx={{
                    fontSize: [14, 14, 18],
                    lineHeight: ["24px", "24px", "26px"],
                    fontWeight: [500, 500, 400],
                    color: COLORS.Grayscale[400],
                  }}
                >
                  출발
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: [14, 14, 18],
                  lineHeight: ["24px", "24px", "26px"],
                  fontWeight: 500,
                  color: COLORS.Black[300],
                }}
              >
                {data.from}
              </Typography>
            </Box>
            {/* 여기 부분 해야함 */}
            <Box
              border={"1px solid ##E6E6E6"}
              height={["14px", "14px", "16px"]}
            ></Box>
            <Box display={"flex"} gap={["8px", "8px", "12px"]}>
              <Box
                bgcolor="#F4F7FB"
                borderRadius="4px"
                display={"inline-block"}
                padding={["2px 6px", "2px 6px", "4px 6px"]}
              >
                <Typography
                  sx={{
                    fontSize: [14, 14, 18],
                    lineHeight: ["24px", "24px", "26px"],
                    fontWeight: [500, 500, 400],
                    color: COLORS.Grayscale[400],
                  }}
                >
                  도착
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: [14, 14, 18],
                  lineHeight: ["24px", "24px", "26px"],
                  fontWeight: 500,
                  color: COLORS.Black[300],
                }}
              >
                {data.to}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          gap={["8px", "8px", "16px"]}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Typography
            sx={{
              fontSize: [14, 14, 18],
              lineHeight: ["24px", "24px", "26px"],
              fontWeight: 500,
              color: COLORS.Black[400],
            }}
          >
            견적 금액
          </Typography>
          <Typography
            sx={{
              fontSize: [18, 18, 24],
              lineHeight: ["26px", "26px", "32px"],
              fontWeight: 700,
              color: COLORS.Black[400],
            }}
          >
            {(data.cost ?? 0).toLocaleString()}원
          </Typography>
        </Box>
        <Box
          display={"flex"}
          gap={["8px", "8px", "11px"]}
          flexDirection={["column", "row", "row"]}
        >
          <Button
            onClick={onConfirmClick}
            variant="contained"
            sx={{
              height: [48, 48, 64],
              bgcolor: COLORS.PrimaryBlue[300],
              borderRadius: ["8px", "8px", "16px"],
            }}
          >
            <Typography
              sx={{
                fontSize: [16, 16, 20],
                lineHeight: ["26px", "26px", "32px"],
                fontWeight: 600,
                color: COLORS.White[100],
              }}
            >
              견적 확정하기
            </Typography>
          </Button>
          <Button
            onClick={onDetailClick}
            variant="outlined"
            sx={{
              height: [48, 48, 64],
              borderRadius: ["8px", "8px", "16px"],
              border: `1px solid ${COLORS.PrimaryBlue[300]}`,
            }}
          >
            <Typography
              sx={{
                fontSize: [16, 16, 20],
                lineHeight: ["26px", "26px", "32px"],
                fontWeight: 600,
                color: COLORS.PrimaryBlue[300],
              }}
            >
              상세보기
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
