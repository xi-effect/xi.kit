import { Grid as GridLayout, Typography, Stack } from '@mui/material';
import {
  Account,
  Activity,
  Add,
  Announce,
  ArrowUp,
  Bold,
  Burger,
  CategoryAdd,
  Calendar,
  Camera,
  Chat,
  Check,
  Cite,
  Clip,
  Clock,
  Close,
  ChannelAdd,
  Copy,
  Code,
  Edit,
  Emotions,
  Endcall,
  Exit,
  External,
  Eyeoff,
  Eyeon,
  File,
  Flag,
  Folder,
  Food,
  Grid,
  H1,
  H2,
  H3,
  Hand,
  Heart,
  Home,
  PeopleInvite,
  Italic,
  Link,
  Maximize,
  Microphone,
  Divider,
  Move,
  Movie,
  Music,
  Nature,
  Notification,
  Objects,
  Ol,
  Palette,
  Photo,
  Picture,
  Places,
  Play,
  Screenshare,
  Search,
  Send,
  Settings,
  Stroke,
  Task,
  Text,
  Trash,
  Ul,
  Underline,
  Updates,
  Users,
} from '@xipkg/icons';

const iconsDict = [
  <Account />,
  <Activity />,
  <Add />,
  <Announce />,
  <ArrowUp />,
  <Bold />,
  <Burger />,
  <Calendar />,
  <CategoryAdd />,
  <Camera />,
  <Chat />,
  <Check />,
  <ChannelAdd />,
  <Cite />,
  <Clip />,
  <Clock />,
  <Close />,
  <Copy />,
  <Code />,
  <Edit />,
  <Emotions />,
  <Endcall />,
  <Exit />,
  <External />,
  <Eyeoff />,
  <Eyeon />,
  <File />,
  <Flag />,
  <Folder />,
  <Food />,
  <Grid />,
  <H1 />,
  <H2 />,
  <H3 />,
  <Hand />,
  <Heart />,
  <Home />,
  <PeopleInvite />,
  <Italic />,
  <Link />,
  <Maximize />,
  <Microphone />,
  <Divider />,
  <Move />,
  <Movie />,
  <Music />,
  <Nature />,
  <Notification />,
  <Objects />,
  <Ol />,
  <Palette />,
  <Photo />,
  <Picture />,
  <Places />,
  <Play />,
  <Screenshare />,
  <Search />,
  <Send />,
  <Settings />,
  <Stroke />,
  <Task />,
  <Text />,
  <Trash />,
  <Ul />,
  <Underline />,
  <Updates />,
  <Users />,
];

const Icons = () => (
  <>
    <GridLayout sx={{ p: 2 }} container spacing={4}>
      {iconsDict.map((icon, index) => {
        return (
          <GridLayout key={index} item>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{ width: '64px', height: '64px' }}
            >
              {icon}
            </Stack>
          </GridLayout>
        );
      })}
    </GridLayout>
  </>
);

export default Icons;