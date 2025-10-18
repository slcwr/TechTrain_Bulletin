import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useCreateThread } from '../../05-entities/threads/model/useCreateThread';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface ThreadFormData {
  title: string;
}

export const ThreadCreateForm = () => {
  const { mutate: createThread, isPending, error } = useCreateThread();
  const { control, handleSubmit } = useForm<ThreadFormData>({});
  const navigate = useNavigate();

  const onSubmit = (data: ThreadFormData) => {
    createThread(data.title);
    navigate('/threads');
  };

  return (
    <Container sx={{ mt: 4, padding: 5, borderRadius: 1, width: 700 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <Typography variant="h5" component="h1">
            スレッド新規作成
          </Typography>

          <Controller
            name="title"
            control={control}
            rules={{
              required: { value: true, message: 'タイトルは必須です' },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                error={!!error}
                helperText={error?.message}
                label="スレッドタイトル"
                variant="outlined"
                fullWidth
                placeholder="タイトルを入力してください"
              />
            )}
          />
          <Box
            sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Link
              component={RouterLink}
              to="/threads"
              sx={{
                textDecoration: 'underline',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              Topに戻る
            </Link>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#4ee9abff' }}>
              {isPending ? '作成中...' : '作成'}
            </Button>
            {error && <p>エラー: {error.message}</p>}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
