import HomeIcon from "@mui/icons-material/Home";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

export const navbarLinks = {
    main: [
        {
          id: 1,
          icon: HomeIcon,
          text: "Home",
          link: "/",
        },
        {
          id: 2,
          icon: WhatshotOutlinedIcon,
          text: "Trending",
          link: "/",
        },
        {
          id: 3,
          icon: SubscriptionsOutlinedIcon,
          text: "Subscriptions",
          link: "/",
        },
      ],      
      secondary: [
        {
          id: 4,
          icon: VideoLibraryOutlinedIcon,
          text: "Library",
          link: "/",
        },
        {
          id: 5,
          icon: HistoryOutlinedIcon,
          text: "History",
          link: "/",
        },
        {
          id: 6,
          icon: OndemandVideoOutlinedIcon,
          text: "Your videos",
          link: "/",
        },
        {
          id: 7,
          icon: WatchLaterOutlinedIcon,
          text: "Watch later",
          link: "/",
        },
        {
          id: 8,
          icon: ThumbUpAltOutlinedIcon,
          text: "Liked videos",
          link: "/",
        },
      ],      
}