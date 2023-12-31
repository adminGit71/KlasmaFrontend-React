import { useMemo } from "react"
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
  useTheme
} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { showFirstLetters } from '../utils/functions'
import InvestProgress from "./InvestProgress"
import { ICampaign } from "../utils/interfaces"
import { ID_OF_STATUS_APPROVED, ID_OF_STATUS_COMPLETED, PRE_THUMBNAIL } from "../utils/constants"

interface IProps {
  dataItem: ICampaign;
}

export default function CampaignCard({ dataItem }: IProps) {
  const theme = useTheme();

  const title = useMemo(() => {
    return showFirstLetters(dataItem.title, 12)
  }, [dataItem.title])

  return (
    <Card sx={{ height: '99%', mx: 1 }}>
      <CardMedia
        component="img"
        src={dataItem.thumbnail || PRE_THUMBNAIL}
        alt={title}
        height={180}
      />
      <CardHeader
        title={title}
        titleTypographyProps={{
          variant: 'h6',
          fontWeight: 700
        }}
        action={
          dataItem.id_status === ID_OF_STATUS_APPROVED ? (
            <Chip label="Investing" color="success" size="small" />
          ) : dataItem.id_status === ID_OF_STATUS_COMPLETED ? (
            <Chip label="Completed" color="primary" size="small" />
          ) : (
            <Chip label="Closed" color="error" size="small" />
          )
        }
      />
      <CardContent>
        <InvestProgress raised={dataItem.raised_price} goal={dataItem.goal_price} />
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={900}
          color={theme.palette.primary.main}
        >
          {(dataItem.raised_price / dataItem.goal_price * 100).toFixed(2)} %
        </Typography>
        <Button
          sx={{ mt: 2 }}
          fullWidth
          variant="contained"
          component={RouterLink}
          to={`/campaigns/${dataItem.id}`}
        >
          Go to campaign
        </Button>
      </CardContent>
    </Card>
  )
}